import React from 'react';

const API_URL = 'https://api.thecatapi.com/v1/images/search'

const Cat = () => {
  
  const catInfo = {
    "id": "d26", 
    "url": "https://cdn2.thecatapi.com/images/d26.jpg", 
    "width": 4672, 
    "height": 3104
  };

  const searchCat = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    const arrayCatData = data[0];

    console.log(data[0]);
    document.getElementById("catPic").src=arrayCatData.url;
  };

  return (
    <div className="app">
        <h1>Hello</h1>
        <button onClick={() => searchCat()}> 
          Roll
        </button>
        
        <div>
          <img id="catPic" src={catInfo.url}></img>
        </div>
      </div>
  );
}

export default Cat;
