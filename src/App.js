import "./styles.css";
import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from './Pages/Home'
import MovieDetail from './Pages/MovieDetail'

export default function App() {
  const [data, setData] = useState([]);

  // fetching the data from the API 
  useEffect(() => {
    async function fetchData() {
      let response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      response = await response.json(); 
      setData(response);
    }

    fetchData();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={data} />}></Route>
        <Route path=":id" element={<MovieDetail data={data}/>} />
      </Routes>
    </div>
  );
}
