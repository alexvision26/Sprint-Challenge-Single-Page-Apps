import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className="search-form">
     <label htmlFor='search'>Search: </label>
     <input id='search' type='text' placeholder='Search...'/>
    </section>
  );
}
