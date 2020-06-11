import React, { useState } from 'react';
import Search from './Search';
import "../css/App.css";
import axios from 'axios';


function App(API_KEY) {
  const [state, setState] = useState({
    searchQuery: '',
    results: [],
    selected: {}
  });

  const apiurl = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

  const search = (e) => {
    if (e.key === 'Enter') {
      axios(apiurl + '&s=' + state.searchQuery).then((data) => {
        console.log(data);
      } );
    }
  }

  const handleInput = (e) => {
    let searchQuery = e.target.value;
    setState(prevState => {
      return { ...prevState, searchQuery: searchQuery }
    });
  }
  
  return (
    <div className='app'>
      <header>
        <h1>hello world</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}


export default App;


