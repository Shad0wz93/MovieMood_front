import MovieElement from "./components/MovieElement";

const movies = [
  {
    title: "Pulp Fiction",
    release_date: "1994-09-10",
    imdb_id: "tt0110912",
    genres: ["Thriller", "Crime"],
    runtime: 154,
  },
  {
    title: "Blade Runner",
    release_date: "1982-06-25",
    imdb_id: "tt0083658",
    genres: ["Science Fiction", "Drama", "Thriller"],
    runtime: 117,
  },
  {
    title: "The Shawshank Redemption",
    release_date: "1994-09-23",
    imdb_id: "tt0111161",
    genres: ["Drama", "Crime"],
    runtime: 142,
  },
  {
    title: "Forrest Gump",
    release_date: "1994-07-06",
    imdb_id: "tt0109830",
    genres: ["Comedy", "Drama", "Romance"],
    runtime: 142,
  },
  {
    title: "Star Wars",
    release_date: "1977-05-25",
    imdb_id: "tt0076759",
    genres: ["Adventure", "Action", "Science Fiction"],
    runtime: 121,
  },
];

export default function App() {
  return (
    <>
      <h1 className="font-bold text-4xl pb-5">Recommandation de films</h1>

      <div className="flex gap-4 mb-6">
        <select className="bg-[#133557] border border-white/20 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>Sélectionner un utilisateur</option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
        </select>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg font-semibold">
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
