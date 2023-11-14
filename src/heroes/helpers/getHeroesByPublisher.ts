import { heroes } from "../data/heroes";
import { Publisher } from "../types/hero.types";

export const getHeroesByPublisher = ( publisher: Publisher ) => {
    return heroes.filter( ( hero ) => hero.publisher === publisher );
}