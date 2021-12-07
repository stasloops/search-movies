import React from 'react'
import { Link } from 'react-router-dom'

const FilmsItem = ({ item }) => {
    
    const items = item

    return (  
        <Link to={`/films/${items.id}`}>
                <div className="films__item">
                {   
                    items.poster_path === null ?
                        <img src="https://skr.sh/i/070921/4ulyoFup.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%2007-09-2021%2016:50:22.jpg" className="films__item-im" alt=""/>
                    :
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${items.poster_path}`} alt="" className="films__item-img"/>
                }
                        <div className="films__item-hg">
                            <div className="films__year-create">{items.release_date}</div>
                        </div>
                        <div className="films__item-low">
                                <div className="films__item-title">{items.title}</div>
                                <div className="films__item-rating">
                                    <span className="fc0 mr-5">IMDb</span><span className="fff">{items.vote_average}</span>
                                </div>
                        </div>
                </div>
        </Link>
                
           
       
      
    )
}

export default FilmsItem
