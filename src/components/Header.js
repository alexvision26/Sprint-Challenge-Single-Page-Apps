import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RmNav = styled.nav`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 1% auto;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <RmNav>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
        <Link to='/episodes'>Episodes</Link>
      </RmNav>
    </header>
  );
}
