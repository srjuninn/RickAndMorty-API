import { Card } from "./Card"
import { StyledCharacterSection } from "./SectionCharacterStyle"


export const CharactersSection = () => {
    return(
        <StyledCharacterSection>
            <h2>Nossos <span>Personagens</span></h2>
            <div className="cardsWrapper">
               {/* aqui será nosso componente dos cards */}
               {/* substituir essa div de baixo pelo card
                component que vou criar */}
                <div className="cards"></div>
                <Card/>
            </div>
        </StyledCharacterSection>
    )
}