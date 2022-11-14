import React from 'react';

const API_URL = 'https://api.thecatapi.com/v1/images/search'

const Cat = () => {
  
  let adriCat = {
    "id": "d26", 
    "url": "https://cdn2.thecatapi.com/images/d26.jpg", 
    "width": 4672, 
    "height": 3104
  };

  const catInfo = {
    "id": "d26", 
    "url": "https://cdn2.thecatapi.com/images/d26.jpg", 
    "width": 4672, 
    "height": 3104
  };

  const searchCat = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    console.log(data);
    adriCat = data;
    const URL = adriCat.url;
    document.getElementById("catPic").src=URL;
  };

  // const adricatcheck = () => {
  //   console.log(adriCat);
  // };

  // const check = () => {
  //   searchCat();
  //   adricatcheck();
  // }

  return (
    <div className="app">
        <h1>Hello</h1>
        <button onClick={() => searchCat()}> 
          Roll
        </button>
        
        <div>
          <img id="catPic" src={adriCat.url}></img>
        </div>
      </div>
  );
}

export default Cat;
