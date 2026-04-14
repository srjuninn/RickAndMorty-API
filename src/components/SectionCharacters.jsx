import { Card } from "./Card"
import { StyledCharacterSection } from "./SectionCharacterStyle"
import { useEffect, useState } from "react"
import axios from 'axios'

export const CharactersSection = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(res => {
                console.log(res.data.results)
                setCharacters(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    return(
        <StyledCharacterSection>
            <h2>Nossos <span>Personagens</span></h2>
            <div className="cardsWrapper">
               {/* aqui será nosso componente dos cards */}
               {/* substituir essa div de baixo pelo card
                component que vou criar */}
                {characters.map((character) => (
                    <Card 
                        img={character.image}
                        name={character.name}
                        specie={character.species}
                        status={character.status}
                        location={character.origin.name}
                    />
                ))}

            </div>
        </StyledCharacterSection>
    )
}