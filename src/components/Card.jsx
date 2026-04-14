import { StyledCard } from "./CardStyle"
import SpeciesIcon from "../assets/SpeciesIcon"
import AliveIcon from "../assets/AliveIcon"
import PlanetIcon from "../assets/PlanetIcon"
export const Card = ({img, name, specie, status, location}) => {


    // consumindo a api do rick and morty via axios com useEffect

    

    return(
        
        <StyledCard>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <div className="charactersDescription">
                <ul>
                    <li>
                        <SpeciesIcon/>
                        {specie}
                    </li>
                    <li>
                        <AliveIcon/>
                        {status}
                    </li>
                    <li>
                        <PlanetIcon/>
                        {location}
                    </li>
                </ul>
            </div>

        </StyledCard>
    )
}