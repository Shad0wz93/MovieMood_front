import { useEffect, useState } from "react";
import { getRecommendedMovies, getUsers } from "./services/apiService"
import type { Movie } from "./models/Movie";
import PredictionList from "./components/PredictionList";

export default function App() {

	const [allUserIds, setAllUserIds] = useState<number[]>([])
  	const [userId, setUserId] = useState(0);
	const [movies, setMovies] = useState<Movie[]>([]);

  	const getMovies = async () => {
		if(userId != 0) {
			const returnedMovies = await getRecommendedMovies(userId);
			console.log(returnedMovies)
			setMovies(returnedMovies)
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

	  		<PredictionList movies={movies} />
		</>
  	);
}
