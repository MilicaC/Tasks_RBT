import { Movie } from "./movie.model";

export class Comment{
    id: number;
    movie: Movie;
    createdAt: Date;
    text: string;
}