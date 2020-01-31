import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://rickandmortyapi.com/api/character/').then(res => {
      console.log(res.data.results)
      setCharacters(res.data.results);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
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
  );
}
