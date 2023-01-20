import React from 'react'
import Header from '../Components/Header'
import Searchbar from '../Components/SearchBar'
import Footer from '../Components/Footer'

function Home({setInput}) {
  return (
    <>
      <Header />
      <section className='home-container'>
        <section className='home-searchbar'>
          <h1>Search your favorite song...</h1>
          <Searchbar setInput={setInput}/>
        </section>
      </section>
      {/* <Footer/> */}
    </>
  )
}

export default Home