import React from 'react'
import Movie from './Movie'

const CategoryDisplayer = ({category}) => {

   return(
       <div>
           <h3>{category.name}</h3>
           <div className="movies-container">
               {category.movies.map(movie => <Movie movie={movie} />)}
           </div>
       </div>
   )
}

export default CategoryDisplayer