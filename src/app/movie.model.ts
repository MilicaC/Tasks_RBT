import { Category } from "./category.model";

export class Movie{
    id : number;
    category : Category;
    imdbId: string;
    name : string;
    description : string;
    imageUrl : string;
}