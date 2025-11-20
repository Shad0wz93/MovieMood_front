export type RecommendedMovie = {
    movieId: number;
    title: string;
    release_date: string;
    imdb_id: string;
    genres: string[];
    runtime: number;
}

export type ExplainedMovie = {
    movieId: number;
    title: string;
    logisticScore: number;
    svdScore: number;
    hybridScore: number;
    interpretation: string;
}

export type Movie = {
    movieId: number;
    recommendationDetails: RecommendedMovie;
    explanation: ExplainedMovie;
}