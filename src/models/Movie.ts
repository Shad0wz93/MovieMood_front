export type RecommendedMovie = {
    title: string;
    release_date: string;
    imdb_id: string;
    genres: string[];
    runtime: number;
}

export type ExplainedMovie = {
    title: string;
    logisticScore: number;
    svdScore: number;
    hybridScore: number;
    interpretation: string;
}