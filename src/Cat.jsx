import React from 'react';
import {useState} from 'react';

const API_URL = 'https://api.thecatapi.com/v1/images/search'

const Cat = () => {
  const[cat, setCat] = useState([]);

  const searchCat = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    setCat(data);
  }

  // useEffect(() => {
  //   searchCat();
  // }, [])

  return (
    <div className="app">
        <h1>Hello</h1>
        <button onClick={() => searchCat()}> 
          Roll
        </button>

        <div>
          <img src={cat.url}></img>
        </div>
      </div>
  );
}

export default Cat;
