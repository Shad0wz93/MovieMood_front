import axios from "axios";
import type { ExplainedMovie, Movie, RecommendedMovie } from "../models/Movie";

export async function getUsers() {

	try {

        const response = await axios.get("http://127.0.0.1:8000/api/v1/users");

        return response.data;

    }
    catch(error: any) {
		return []
    }
  
}

export async function getRecommendedMovies(userId: number) {

    try {

		const requestBody = {
			"alpha": 0.5,
			"min_score": 0.6,
			"n_recommendations": 10,
			"user_id": userId
		}

        const recommendedMovies = await axios.post("http://127.0.0.1:8000/api/v1/predict", requestBody);

		const cleanRecommendedMovies = recommendedMovies.data.recommendations.map((item: any) => {
			const fixed = item.genres.replaceAll('\'', '"');
			
			const genresArray = JSON.parse(fixed);

			const genreNames = genresArray.map((g: { id: number; name: string }) => g.name);

			return {
				...item,
				genres: genreNames
			};
		});

		const movieIds = cleanRecommendedMovies.map((r: any) => r.movieId)

		const explainedMovies = await getExplainedMovies({ userId, movieIds })

		const movies: Movie[] = mergeMovies(cleanRecommendedMovies, explainedMovies)

        return movies;

    }
    catch(error: any) {
		return []
    }

}

async function getExplainedMovies({ userId, movieIds }: { userId: number, movieIds: number[] }) {

    try {

		const requestBody = {
			"alpha": 0.5,
			"movie_ids": movieIds,
			"user_id": userId
		}

        const response = await axios.post("http://127.0.0.1:8000/api/v1/explain", requestBody);

		const explainedMovies: ExplainedMovie[] = response.data.explanations.map((movie: any) => ({
			movieId: movie.movieId,
			title: movie.title,
			logisticScore: movie.scores.logistic,
			svdScore: movie.scores.svd,
			hybridScore: movie.scores.hybrid,
			interpretation: movie.interpretation
		}));


        return explainedMovies;

    }
    catch(error: any) {
		return []
    }

}

function mergeMovies(
  recommended: RecommendedMovie[],
  explained: ExplainedMovie[]
): Movie[] {

  const explainedMap = new Map<number, ExplainedMovie>();
  for (const e of explained) {
    explainedMap.set(e.movieId, e);
  }

  const merged: Movie[] = recommended
    .map((rec) => {
      const expl = explainedMap.get(rec.movieId);
      if (!expl) return null;
      return {
        movieId: rec.movieId,
        recommendationDetails: rec,
        explanation: expl
      };
    })
    .filter((m): m is Movie => m !== null);

  return merged;
}