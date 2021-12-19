import React, {useState, useEffect} from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Header({setGetValue, setGetSearch}) {
    const navigate = useNavigate()
    const KEY = 'c2918c64f136a280f575ff886f86f99e'

    const [search, setSearch] = useState([]);
    const [value, setValue] = useState('')
   
    useEffect(() => {
        if (value) {
          axios
            .get(
              `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${value}&language=ru`,
            )
            .then((res) => {
              setSearch(res.data.results)
            })
        }
      }, [value]);
  
      const submitValue = () => {
        setGetValue(value)
        setGetSearch(search)
        navigate('/')
        setValue('')
    }
    return (
    
        <header className="header">
        <div className="header_inner">
        <Link to='/'>
            <div className="logo">animeserial</div>
        </Link>
            <div className="header_menu">
                <div className="form">
                    <input placeholder="Найдите фильм"
                           type="text" 
                           className="input"
                           value={value}
                           onChange={(e) => setValue(e.target.value)}
                                                     />
                    <button className="submit-value" onClick={submitValue}>ПОИСК</button>
                </div>
                <nav className="nav">
                    <ul className="nav_list">
                    <li className="margin">
                        <a href="" className="nav_link">ФИЛЬМЫ</a>
                    </li>
                    <li className="margin">
                        <a href="" className="nav_link">МУЛЬТСЕРИАЛЫ</a>
                    </li>

                    <li className="margin">
                        <a href="" className="nav_link">АНИМЕ</a>
                    </li>
                    </ul>
                </nav>  
            </div>
        </div>
    </header>
    

   )
}

export default Header;
