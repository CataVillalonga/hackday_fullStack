import React,{useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Videos from './Routes/Videos';
import Results from './Routes/Results'
import './App.css';

function App() {
  const [videos,setVideos] = useState([{name:'', etag: ''}]);
  const [input, setInput] = useState('')

  const getVideos = async url => {
    const response = await fetch(url);
    const data = await response.json();
    setVideos(data);
  };
  useEffect(() => {
    getVideos(`api/${input}`);
  }, [input]);
  return (
    <>
      <Routes>
          <Route path="/" element={
            <Home setInput={setInput}/>
            }>
          </Route>
          <Route path="/video" element={
            <Videos videos={videos} setInput={setInput}/>}>
          </Route>
          <Route path="/results" element={<Results videos={videos} setInput={setInput}/>}>
          </Route>
      </Routes>
    </>
  );
}

export default App;
