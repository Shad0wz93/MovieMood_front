import axios from "axios";

export async function getRecommendedMovies(userId: number) {

    try {

        console.log(userId)

        const response = await axios.get("https://127.0.0.1:8000/movies");

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

        console.log(response)

        return response;

    }
    catch(error: any) {

    }

}

export async function getUsers() {

	try {

        const response = await axios.get("http://127.0.0.1:8000/users");

        console.log(response)

        return response.data;

    }
    catch(error: any) {
		return []
    }
  
}