import type { ExplainedMovie } from "../models/Movie";
import ExplainedMovieComponent from "./ExplainedMovieComponent";

export default function ExplanationList({ movies }: Readonly<{ movies: ExplainedMovie[] }>) {

    return (

        <div className="bg-[#0f2a4a] p-6 rounded-xl shadow-xl mx-auto">
            <h2 className="text-2xl font-bold">Explication</h2>

            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="py-5 text-left ps-2">Titre</th>
                        <th className="py-5 text-left">Scores</th>
                        <th className="py-5 text-left">Interprétation</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => {
                        return <ExplainedMovieComponent movie={movie} />;
                    })}
                </tbody>
            </table>
        </div>


    )

}