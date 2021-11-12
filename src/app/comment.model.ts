import { Movie } from "./movie.model";

export class Comment{
    id: number;
    movieId: number;
    createdAt: Date;
    text: string;
}