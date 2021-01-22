import React, {useMemo, useContext} from 'react'
import Button from '../components/Button'
import UserContext from '../contexts/UserContext'

const MovieHeader = ({movie}) => {

    const style = useMemo(() => {
        return {
            backgroundImage: `url(${movie.image})`
        }
    }, [movie])

    const {user} = useContext(UserContext)

    return(
        <div className="movie-header" style={style}>
            <div className="type-container">
                <img src="https://image.flaticon.com/icons/png/512/870/870910.png" />
                <div>{movie.type}</div>
            </div>
            <h1 className="movie-title">{movie.title}</h1>
            <div className="buttons-container">
                <Button onClick={() => alert("Lecture")}>Lecture</Button>
                <Button clear>Plus d'info</Button>
                {user && <Button>Ajouter aux favoris de {user.username}</Button>}
            </div>
        </div>
    )
}

export default MovieHeader