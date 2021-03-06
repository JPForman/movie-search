import React, { useState } from 'react';
import Search from './Search';
import "../css/App.css";
import axios from 'axios';
import Results from './Results';
import Popup from './Popup';


function App(API_KEY) {
  const [state, setState] = useState({
    searchQuery: '',
    results: [],
    selected: {}
  });

  const apiurl = `https://www.omdbapi.com/?&apikey=45c2e0cb`;

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.searchQuery).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  const handleInput = (e) => {
    let searchQuery = e.target.value;
    setState(prevState => {
      return { ...prevState, searchQuery: searchQuery }
      
    });
  }

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(id);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }
  
  return (
    <div className='app'>
      <header>
        <h1>The Amazing Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        {state.results ? 
          <Results results={state.results} openPopup={openPopup} />
          :
          <h3 id='noResults'>Sorry, no results for that query</h3>
        }
        
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;


