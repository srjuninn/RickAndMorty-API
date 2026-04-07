import  rickHeroImg  from '../assets/images/RickHeroImage.png'
import  mainTitle  from '../assets/images/RickAndMortyTitleImg.png'
import  { StyledMain }  from './MainStyle'


export const Main = () => {
    return(
        <StyledMain>
            <img src={rickHeroImg} alt="imagem do rick do desenho rick and morty" />
            <aside>
                <img src={mainTitle} alt="rick and morty title" />
                <h1>Bem-vindos ao <span>consumo de API</span> do Rick and Morty</h1>
                <p>Aqui você encontra informações sobre os personagens de Rick and Morty.</p>
                <div className="buttonWrapper">
                    <button><a href="">Veja agora</a></button>
                    <button><a href="">Saiba mais</a></button>
                </div>
            </aside>
        </StyledMain>
    )
}