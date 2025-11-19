import axios from "axios";
import type { ExplainedMovie } from "../models/Movie";

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

        const response = await axios.post("http://127.0.0.1:8000/api/v1/predict", requestBody);

		const clean = response.data.recommendations.map(item => {
			const fixed = item.genres.replace(/'/g, '"');
			
			const genresArray = JSON.parse(fixed);

			const genreNames = genresArray.map((g: { id: number; name: string }) => g.name);

			return {
				...item,
				genres: genreNames
			};
		});

		console.log(clean)

        return clean;

    }
    catch(error: any) {

    }

}

export async function getExplainedMovies({ userId, movieIds }: { userId: number, movieIds: number[] }) {

    try {

		const requestBody = {
			"alpha": 0.5,
			"movie_ids": movieIds,
			"user_id": userId
		}

		console.log(requestBody)

        const response = await axios.post("http://127.0.0.1:8000/api/v1/explain", requestBody);

		console.log(response.data)

		const explainedMovies: ExplainedMovie[] = response.data.explanations.map((movie: any) => ({
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