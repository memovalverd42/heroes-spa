import { FC } from "react"
import { Hero } from "../types/hero.types"
import { Link } from "react-router-dom";

interface HeroItemProps {
    hero: Hero
}

export const HeroItem: FC<HeroItemProps> = ({ hero }) => {

    const heroImageUrl = `assets/heroes/${hero.id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                 <div className="row no-gutters">
                    <div className="col-4">
                        <img 
                            className="card-img" 
                            src={heroImageUrl}
                            alt={hero.characters} 
                        />
                    </div>
                    <div className="col-8">
                        <h5 className="card-title">{ hero.superhero }</h5>
                        <p className="card-text">{ hero.alter_ego }</p>

                        { ( hero.alter_ego !== hero.characters ) && (<p>{ hero.characters }</p>) }

                        <p className="card-text">
                            <small className="text-muted">{ hero.first_appearance }</small>
                        </p>

                        <Link to={`/hero/${hero.id}`}> Mas.. </Link>
                    </div>
                 </div>
            </div>
        </div>
    )

}