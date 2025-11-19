import { useEffect, useState } from "react";
import { getRecommendedMovies, getExplainedMovies, getUsers } from "./services/apiService"
import type { RecommendedMovie, ExplainedMovie } from "./models/Movie";
import PredictionList from "./components/PredictionList";
import ExplanationList from "./components/ExplanationList";

export default function App() {

	const [allUserIds, setAllUserIds] = useState<number[]>([])
  	const [userId, setUserId] = useState(0);
	const [recommendedMovies, setRecommendedMovies] = useState<RecommendedMovie[]>([]);
	const [explainedMovies, setExplainedMovies] = useState<ExplainedMovie[]>([]);

  	const getMovies = async () => {
		if(userId != 0) {
			const recommendation = await getRecommendedMovies(userId);
			setRecommendedMovies(recommendation)

			const movieIds = recommendation.map((r: any) => r.movieId)

			const explanation = await getExplainedMovies({userId, movieIds})
			setExplainedMovies(explanation)
		}

  	};

	const getUserIds = async () => {
		const userIds = await getUsers();

		setAllUserIds(userIds)
	}

	useEffect(() => {
		getUserIds()
	}, [])

  	return (
		<>
	  		<h1 className="font-bold text-4xl pb-5">Recommandation de films</h1>

	  		<div className="flex gap-4 mb-6">
				<select className="bg-[#133557] border border-white/20 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={(e) => setUserId(parseInt(e.target.value))}>
					<option>Sélectionner un utilisateur</option>
					{
						allUserIds.map((userId) => {
							return (
								<option key={userId} value={`${userId}`}>User {userId}</option>
							)
						})
					}
				</select>

				<button onClick={getMovies} className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-semibold">
		  			Lancer la recherche
				</button>
	  		</div>

	  		<PredictionList movies={recommendedMovies} />

			<ExplanationList movies={explainedMovies} />
		</>
  	);
}
