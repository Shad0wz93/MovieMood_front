import { useEffect, useState } from "react";
import MovieElement from "./components/MovieElement";
import { getRecommendedMovies, getUsers } from "./services/apiService"
import type { Movie } from "./models/Movie";

export default function App() {

	const [allUserIds, setAllUserIds] = useState<number[]>([])
  	const [userId, setUserId] = useState(0);
	const [movies, setMovies] = useState<Movie[]>([]);

  	const getMovies = async () => {
		const response = await getRecommendedMovies(userId);

		console.log(response)
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

	  		<div className="bg-[#0f2a4a] p-6 rounded-xl shadow-xl mx-auto">
				<table className="w-full border-collapse">
		  		<thead>
					<tr>
						<th className="py-5 text-left ps-2">Titre</th>
						<th className="py-5 text-left">Année</th>
						<th className="py-5 text-left">Genres</th>
						<th className="py-5 text-left">Durée</th>
					</tr>
		  		</thead>
		  		<tbody>
					{movies.map((movie) => {
			  			return <MovieElement key={movie.imdb_id} movie={movie} />;
					})}
		  		</tbody>
				</table>
	  		</div>
		</>
  	);
}
