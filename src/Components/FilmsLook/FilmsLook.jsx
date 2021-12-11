import React from 'react'
import './FilmsLook.css'

function FilmsLook({item}) {
    const items = item
    
    return (<>
   <div className="description">
        <div className="description_inner">
         {   
         items.poster_path === null ?
         <img src="https://skr.sh/i/070921/4ulyoFup.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%2007-09-2021%2016:50:22.jpg" alt=""/>
         :
         <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${items.poster_path}`} alt="" className="description_card"/>
        }
            <div className="description_name">
                <div className="description_item1">
                    <p>{items.title} смотреть онлайн</p>
                    <p className="text1">{items.overview}</p>
                </div>
                <div className="description_item2">
                    <ul>
                        <li className="description_items">
                            <span>Название:</span> <span className="text1">{items.title}</span>
                        </li>
                        <li className="description_items">
                            <span>Дата выхода:</span> <span className="text1">{items.release_date}</span>
                        </li>
                        <li className="description_items">
                            <span>Режиcсер:</span> <span className="text1"></span>
                        </li>
                        <li className="description_items">
                            <span>Страна:</span> <span className="text1"></span>
                        </li>
                    </ul>
                </div>
                <div className="description_item3">
                    <ul>
                        <li className="description_items">
                            <span>Перевод:</span> <span className="text1"></span>
                        </li>
                        <li className="description_items">
                            <span>Качество:</span> <span className="text1"></span>
                        </li>
                    </ul>
                    <div className="kps">
                        <span className="kp">IMDB {items.vote_average}</span>
                    </div>
                </div>
                <div className="description_item4">
                    <span>В главных ролях:</span> <span className="text1"></span><br/>
                    <span>Жанр:</span> <span className="text1"></span>
                </div>
            </div>
        </div>
    </div>
    
    <div className="description_blov">
        <div className="cccc">{items.title}, СМОТРЕТЬ ОНЛАЙН В ХОРОШЕМ КАЧЕСТВЕ</div>
    </div>

    <div className="vidios">
       
    </div>

    </>)
}

export default FilmsLook;
