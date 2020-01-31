import React from "react";
import { Route} from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import SeachForm from './components/SearchForm';
import WelcomePage from './components/WelcomePage';
import CharacterCard from './components/CharacterCard';
import Episodes from './components/Episodes';
import Locations from './components/Locations';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/'>
        <WelcomePage/>
      </Route>

      <Route exact path='/characters'>
      <SeachForm/>
      <CharacterList/>
      </Route>

      <Route path='/characters/:id'>
        <CharacterCard/>
      </Route>

      <Route path='/episodes'>
        <Episodes/>
      </Route>

    </main>
  );
}
