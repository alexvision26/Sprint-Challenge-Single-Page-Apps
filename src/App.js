import React from "react";
import {Link, Switch, Route} from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import SeachForm from './components/SearchForm';
import WelcomePage from './components/WelcomePage';


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
    </main>
  );
}
