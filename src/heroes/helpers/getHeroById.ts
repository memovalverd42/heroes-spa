import { heroes } from "../data/heroes"

export const getHeroById = ( heroId: string ) => {
    return heroes.find( hero => hero.id === heroId );
}