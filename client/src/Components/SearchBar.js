import React, {useRef} from 'react'
import { useNavigate } from "react-router-dom";
import search_logo from '../Images/search_logo.svg'

function SearchBar({ setInput }) {
  const inputValue = useRef()
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault()
    setInput(inputValue.current.value)
    navigate('/results')
  }

  return (
    <form className='searchbar-container'>
      <input type='text' placeholder='search' className='searchbar-input'
       ref={inputValue} required
      />
      <button onClick={searchHandler}>
        <img src={search_logo} alt="search_logo" className='searchbar-logo'/>
      </button>
    </form>
  )
}

export default SearchBar