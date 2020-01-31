import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  const [query, setQuery] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://rickandmortyapi.com/api/character/').then(res => {
      // console.log(res.data.results)
      // setCharacters(res.data.results);
      const newChars = res.data.results.filter(char => char.name.toLowerCase().includes(query.toLowerCase())
      );
      setCharacters(newChars)
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

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
      {characters.map(e => {
        return (
          <div className='char-card'>
            <h3>Name: {e.name}</h3>
            <h4>Species: {e.species}</h4>
            <img src={e.image}/>
          </div>
        )
      })}
    </section>
    </div>
  );
}
