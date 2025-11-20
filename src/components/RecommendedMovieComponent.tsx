import { useEffect, useState } from "react";
import type { ExplainedMovie, RecommendedMovie } from "../models/Movie";
import MinutesToHoursConverter from "../utils/timeConverter";
import { TableCell, TableRow } from "./shadcn/table";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./shadcn/collapsible";
import ExplainedMovieComponent from "./ExplainedMovieComponent";
import { ChevronsUpDownIcon } from "lucide-react";

export default function RecommendedMovieComponent({ movie, explanation }: Readonly<{ movie: RecommendedMovie, explanation: ExplainedMovie }>) {
  	const [hours, setHours] = useState(0);
  	const [minutes, setMinutes] = useState(0);

  	useEffect(() => {
    	const runtimeInHoursAndMinutes = MinutesToHoursConverter(movie.runtime);

    	setHours(runtimeInHoursAndMinutes.hours);
    	setMinutes(runtimeInHoursAndMinutes.minutes);
  	}, []);

  	return (
    	
		<Collapsible asChild>
			<>
				<TableRow className="border-y cursor-pointer hover:bg-[#143a63] transition">
					<TableCell>
						<CollapsibleTrigger asChild>
							<ChevronsUpDownIcon />
						</CollapsibleTrigger>
					</TableCell>
					<TableCell className="py-5 font-bold ps-2 underline">
						<a href={`https://www.imdb.com/fr/title/${movie.imdb_id}`} target="_blank">{movie.title}</a>
					</TableCell>
					<TableCell className="py-5">{new Date(movie.release_date).getFullYear()}</TableCell>
					<TableCell className="py-5">{movie.genres.join(", ")}</TableCell>
					<TableCell className="py-5">{hours} h {minutes} min</TableCell>
				</TableRow>
				<CollapsibleContent asChild>
					<tr>
						<td colSpan={5}>
							<ExplainedMovieComponent movie={explanation} />
						</td>
					</tr>
				</CollapsibleContent>
			</>
		</Collapsible>
  );
}
