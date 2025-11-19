import { useEffect, useState } from "react";
import type { RecommendedMovie } from "../models/Movie";
import MinutesToHoursConverter from "../utils/timeConverter";

export default function RecommendedMovieComponent({ movie }: Readonly<{ movie: RecommendedMovie }>) {
  	const [hours, setHours] = useState(0);
  	const [minutes, setMinutes] = useState(0);

  	useEffect(() => {
    	const runtimeInHoursAndMinutes = MinutesToHoursConverter(movie.runtime);

    	setHours(runtimeInHoursAndMinutes.hours);
    	setMinutes(runtimeInHoursAndMinutes.minutes);
  	}, []);

  	return (
    	
		<tr className="border-y cursor-pointer hover:bg-[#143a63] transition" onClick={() => window.open(`https://www.imdb.com/fr/title/${movie.imdb_id}`)}>
			<td className="py-5 font-bold ps-2">{movie.title}</td>
			<td className="py-5">{new Date(movie.release_date).getFullYear()}</td>
			<td className="py-5">{movie.genres.join(", ")}</td>
			<td className="py-5">{hours} h {minutes} min</td>
		</tr>
  );
}
