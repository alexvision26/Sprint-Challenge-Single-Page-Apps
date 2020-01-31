import React, { useEffect, useState } from "react";
import axios from 'axios';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  const [query, setQuery] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    setTimeout(()=> {axios.get('https://rickandmortyapi.com/api/character/').then(res => {
      // console.log(res.data.results)
      // setCharacters(res.data.results);
      const newChars = res.data.results.filter(char => char.name.toLowerCase().includes(query.toLowerCase())
      );
      setCharacters(newChars)
    })}, 600)
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  // const CharCard = styled.div`
  //   background-color: lightblue;
  //   width: 20%;
  //   padding: 1%;
  //   margin: 1%;
  // `;

  // const LoaderStyle = styled.div`
  //   text-align: center;
  //   margin: 5% auto;
  //   padding: 5%;
  // `;


  return (
    <div className='container'>
      <form className='search-bar'>
        <label htmlFor='name'>Search: </label>
        <input
          type='text'
          onChange={handleInputChange}
          value={query}
          name='name'
          placeholder='Search by name...'
          autoComplete='off'
          />

      </form>
      <section className="character-list">

      {characters == 0 ? <div className='loader'><Loader
      type='RevolvingDot'
      color='#00BFFF'
      height={400}
      width={400}
      timeout={3500}/></div> : characters.map(e => {
        return (
          <Link to={`/characters/${e.id}`}>
          <div>
            <h3>Name: {e.name}</h3>
            <h4>Species: {e.species}</h4>
            <img src={e.image} alt=''/>
          </div>
          </Link>
        )
      })}

      {/* {characters.map(e => {
        return (
          <Link to={`/characters/${e.id}`}>
          <div>
            <h3>Name: {e.name}</h3>
            <h4>Species: {e.species}</h4>
            <img src={e.image} alt=''/>
          </div>
          </Link>
        )
      })} */}
    </section>
    </div>
  );
}
