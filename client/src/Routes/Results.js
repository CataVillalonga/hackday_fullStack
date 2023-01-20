import React, {useRef} from 'react';
import Header from '../Components/Header';
import Searchbar from '../Components/SearchBar';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router';
function Results({videos, setInput}) {
  const currentVideo = useRef()
  const navigate = useNavigate();

  const currentVideoHandler = () => {
    navigate('/video')
  }
  return (
    <>
      <Header />
      <section className='results-container'>
        <section className='result-searchbar'>
          <Searchbar setInput={setInput}/>
        </section>
        <section className='result-list'>
          {videos?.map((video,index) => {
          return (
          <section className='results' key={index} onClick={currentVideoHandler}>
          <iframe src={`https://www.youtube.com/embed/${video.id}`} ref={currentVideo} title='search result' className='result-iframe'></iframe>
          <div className='result-details'>
          <h2>{video.name}</h2>
          <p>{video.description}</p>
          </div>
        </section>
        )
      })}
      </section>
      </section>
      {/* <Footer/> */}
    </>
  )
}

export default Results