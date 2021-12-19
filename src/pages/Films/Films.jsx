import React, {useState, useEffect} from 'react'
import "./Films.css"
import FilmsItem from '../../Components/FilmsItem/FilmsItem'
import axios from 'axios'

function Films({setItemid, getValue, getSearch}) {
    const [loadin, setLoadin] = useState(true);
    const [currentPage, setCurrentPag] = useState(1);
    const [movi, setMovie] = useState([]);
    const [fetchin, setFetchin] = useState(true);

    const KEY = 'c2918c64f136a280f575ff886f86f99e'

    useEffect(() => { 
      if (fetchin) {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&page=${currentPage}&language=ru`,
          )
          .then((response) => {
            setLoadin(false);
            setMovie([...movi, ...response.data.results])
            setCurrentPag((prevState) => prevState + 1); 
          })
          .finally(() => setFetchin(false));
      }
      setItemid(movi)
    }, [fetchin]);
    

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      2000
    ) {
      setFetchin(true);
    }
  };
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  

    return (
        <main className="films">
            <div className="films__inner">
            {
            loadin === true ? 
                <h1>Загрузка</h1>
               :
            getValue ? 
                getSearch.map((item, id) => (
                  <FilmsItem item={item} key={id}/>
                  ))
                :
                movi.map((item, id) => (
                  <FilmsItem item={item} key={id}/>
                  ))
            }
            </div>
        </main>
               
               
    )
}

export default Films
