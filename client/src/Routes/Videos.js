import React from 'react'
import Header from '../Components/Header'
import Searchbar from '../Components/SearchBar'
import Main from '../Components/Main'
import Footer from '../Components/Footer'

function Videos({videos, setInput}) {
  return (
    <>
    <Header />
    <section className='main-searchbar'>
      <Searchbar setInput={setInput}/>
      <h2>More like this...</h2>
    </section>
    <Main videos={videos}/>
    {/* <Footer/> */}
  </>
  )
}

export default Videos