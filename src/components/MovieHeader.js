import React, {Fragment, useEffect} from 'react'

const MovieHeader = ({movie, color}) => {

    const initialize = () => {
        console.log(color === "red" ? "Good color" : "Bad Color")
    }

    useEffect(initialize, [color])

    return(
        <Fragment>
            {color === "red" ?
                <p>La couleur est rouge</p>
            :
                <p>La couleur n'est pas valide</p>
            }

            {movie && <h1>{movie.title}</h1>}
        </Fragment>
    )
}

export default MovieHeader