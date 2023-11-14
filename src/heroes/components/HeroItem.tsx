import { FC } from "react"
import { Hero } from "../types/hero.types"

interface HeroItemProps {
    hero: Hero
}

export const HeroItem: FC<HeroItemProps> = ({ hero }) => {
    return (
        <div className="col">
            <div className="card">
                 <div className="row no-gutters">
                    <div className="col-4">
                        <img 
                            className="card-img" 
                            //src={heroImageUrl}
                            alt={hero.characters} 
                        />
                    </div>
                 </div>
            </div>
        </div>
    )

}