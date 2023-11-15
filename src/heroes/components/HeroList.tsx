import { FC, useMemo } from 'react';
import { Publisher } from "../types/hero.types"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroItem } from "."

interface HeroListProps {
    publisher: Publisher
}

export const HeroList: FC<HeroListProps> = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => (
                    <HeroItem key={hero.id} hero={hero} />
                ))
            }
        </div>
    )
}