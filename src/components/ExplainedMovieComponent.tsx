import type { ExplainedMovie } from "../models/Movie";

export default function ExplainedMovieComponent({ movie }: Readonly<{ movie: ExplainedMovie }>) {

    return (
        
        <tr className="border-y hover:bg-[#143a63] transition">
            <td className="py-5 font-bold ps-2">{movie.title}</td>
            <td className="py-5 ps-2">
                Score logistique : {movie.logisticScore} <br />
                Score svd : {movie.svdScore} <br />
                Score hybride : {movie.hybridScore}
            </td>
            <td className="py-5 ps-2">{movie.interpretation}</td>
        </tr>
  );
}
