import axios from "axios";

export const Card = () => {
    // consumindo a api do rick and morty via axios
    axios.get('https://rickandmortyapi.com/api/character')
        .then(res => console.log(res))
        .catch(err => console.log(err))


    return(
        <div className="card">

        </div>
    )
}