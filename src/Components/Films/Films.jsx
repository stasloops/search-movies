import React, {useState, useEffect} from 'react'
import "./Films.css"
import FilmsItem from './FilmsItem/FilmsItem'
import axios from 'axios'

function Films({setItemid, getValue, getSearch}) {
  const getValues = getValue
  const getSearchs = getSearch
  const setItemsid = setItemid

    const [loadin, setLoadin] = useState(true);
    const [currentPage, setCurrentPag] = useState(1);
    const [movi, setMovie] = useState([]);
    const [fetchin, setFetchin] = useState(true);
   
    // const KP = 'https://api.kinopoisk.cloud/movies/all/page/all/token/fabe3452e26d0b828b9f06da70484a58'
    // const IMDb = 'https://imdb-api.com/en/API/Top250TVs/k_u9dee0qe'
    // const TMDb = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&total_pages=${itemPerPage}&language=ru'

    // const [item, setItem] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [currentPage, setCurrentPage] = useState(1)
    // const [itemPerPage] = useState(30)

    const KEY = 'c2918c64f136a280f575ff886f86f99e'

    useEffect(() => { 
      if (fetchin) {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&page=${currentPage}&language=ru`,
          )
          .then((res) => {
            setLoadin(false);
            setMovie([...movi, ...res.data.results])
            setCurrentPag((prevState) => prevState + 1); 
          })
          .finally(() => setFetchin(false));
      }
      setItemsid(movi)
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

  

    // useEffect(() => {
    //     const getItems = async () =>{
    //         setLoading(true)
    //         const response = await axios.get(`${IMDb}`)
    //         console.log(response.data);
    //         setItem(response.data.items)
    //         setLoading(false)
           
    //     }

    //     getItems()
    // },[])

    
   
    // const lastItemIndex = currentPage * itemPerPage
    // const firstItemIndex = lastItemIndex - itemPerPage
    // const currentItem = item.slice(firstItemIndex, lastItemIndex )

    // const paginate = pageNumber => setCurrentPage(pageNumber)
    return (
        <main className="films">
            <div className="films__inner">
            {
            loadin === true ? 
                <h1>Загрузка</h1>
               :
            getValues ? 
                getSearchs.map((item, id) => (
                  <FilmsItem item={item} key={id}/>
                  ))
                :
                movi.map((item, id) => (
                  <FilmsItem item={item} key={id}/>
                  ))
            }
                {/* <Pagination
                 itemPerPage={itemPerPage}
                 totalItems={item.length}
                 paginate={paginate}
                 /> */}
            </div>
        </main>
               
               
    )
}

export default Films
