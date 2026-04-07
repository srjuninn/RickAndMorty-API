import {StyledHeader} from './HeaderStyle'
import GitHubIcon from "../assets/gitHubSvgIcon";
// Criando a função simples pra criar um componente
// export default function Header(){
//     return(
//         <header>
//             <a href="https://github.com/srjuninn">srjuninn</a>
//             <GitHubIcon></GitHubIcon>
//         </header>
//     )
// }
// Criando uma arrow function pra criar o componente
export const Header = () => {
    return(
        <StyledHeader>
            <a href="https://github.com/srjuninn">srjuninn</a>
            <GitHubIcon></GitHubIcon>
        </StyledHeader>
    )
}