import type { Movie } from "../models/Movie";
import MovieElement from "./RecommendedMovieComponent";

export default function PredictionList({ movies }: Readonly<{ movies: Movie[] }>) {

    return (
        <div className="bg-[#0f2a4a] p-6 rounded-xl shadow-xl mx-auto mb-3">
            {
                movies.length > 0 ?
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="py-5 text-left ps-2">Titre</th>
                            <th className="py-5 text-left">Année</th>
                            <th className="py-5 text-left">Genres</th>
                            <th className="py-5 text-left">Durée</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => {
                            return <MovieElement key={movie.movieId} movie={movie.recommendationDetails} explanation={movie.explanation} />;
                        })}
                    </tbody>
                </table>
                :
                <p>Lancer une recherche pour avoir la liste des recommantations</p>
            }
            
        </div>
    )

}