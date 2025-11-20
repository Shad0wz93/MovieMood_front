import type { ExplainedMovie } from "../models/Movie";

export default function ExplainedMovieComponent({ movie }: Readonly<{ movie: ExplainedMovie }>) {

    return (
        
        <div className="p-4 rounded-xl space-y-3">
            <h3 className="text-lg font-semibold text-white">Explications</h3>

            <div className="flex flex-col gap-2 text-sm">

                <div className="flex flex-wrap gap-4 text-blue-200">
                    <span>Score logistique : <b>{movie.logisticScore}</b></span>
                    <span>Score SVD : <b>{movie.svdScore}</b></span>
                    <span>Score hybride : <b>{movie.hybridScore}</b></span>
                </div>

                <p className="text-blue-100 leading-relaxed">{movie.interpretation}</p>
            </div>
        </div>
  );
}
