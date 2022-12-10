import React from 'react';
import './Cat.css';

const API_URL = 'https://api.thecatapi.com/v1/images/search'

const Cat = () => {
  
  // const catInfo = {
  //   "id": "d26", 
  //   "url": "https://cdn2.thecatapi.com/images/d26.jpg", 
  //   "width": 4672, 
  //   "height": 3104
  // };

  const searchCat = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    const arrayCatData = data[0];

    console.log(data[0]);
    document.getElementById("catPic").src=arrayCatData.url;
  };

  window.onload=searchCat();

  return (
    <div className="app">
      <body>
        <h1>CAT</h1>
        <button className="button" onClick={() => searchCat()}> Roll </button>
        <div>
          <img id="catPic" src={"cat"} alt="no cat :("></img>
        </div>
      </body>
      </div>
  );
}

export default Cat;
