import './App.css';
import React, {useState} from 'react'
import Films from './Components/Films/Films';
import FilmsLook from './Components/FilmsLook/FilmsLook';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [getValue, setGetValue] = useState('')
  const [getSearch, setGetSearch] = useState([])
  const [itemid, setItemid] = useState([])
  
  return (<>
    <div className="container">
    <Router>
        <Header setGetSearch={setGetSearch} setGetValue={setGetValue}/>
      <Routes>
        <Route element={<Films getValue={getValue} getSearch={getSearch} setItemid={setItemid}/>} path="/" />
      {
        getValue ?
          getSearch.map((item) => (
            <Route element={<FilmsLook item={item} />} path={`/films/${item.id}`} key={`${item.id}_${item.title}`} />
        ))
        :
          itemid.map((item) => (
            <Route element={<FilmsLook item={item} />} path={`/films/${item.id}`} key={`${item.id}_${item.title}`} />
      ))
      }
      </Routes>
      </Router>
    </div>
  </>);
}

export default App;
