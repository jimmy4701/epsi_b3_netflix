import React, {useMemo} from 'react'

const Movie = ({movie}) => {

    const style = useMemo(() => {
        return {
            backgroundImage: `url(${movie.image})`
        }
    }, [movie])

   return(
       <div className="movie" style={style}>

       </div>
   )
}

export default Movie