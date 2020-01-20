import React from "react";
import PropTypes from "prop-types";


const gameLike=[
    {
      id:1,
      name:"game",
      image:"https://image.fmkorea.com/files/attach/new/20200106/486616/2441209333/2576448191/c96d8fa04d2f09c56c52e98cdc1d08fc.jpg"
     
    },
    {
      id:2,
      name:"bik",
      image:"https://image.fmkorea.com/files/attach/new/20200106/486616/2441209333/2576448191/85aa9365e07ab03c040fc33a50cf2325.jpg",
      rating:4.5
    },
    {
      id:3,
      name:"girl",
      image:"https://image.fmkorea.com/files/attach/new/20200106/486616/2441209333/2576448191/b2bdf8f275cfb773c60a1f0aade471ab.jpg",
      rating:4
    },
    {
      id:4,
      name:"hot",
      image:"https://image.fmkorea.com/files/attach/new/20200106/486616/2441209333/2576448191/09de3d7cc54400b77a1d709f920a8e4a.jpg",
      rating:5
    }
  ];

  function Game({name, picture,rating}){
 
    return <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    
    </div>;
    
    }

Game.prototypes ={
  name    :PropTypes.string.isRequired,
  picture :PropTypes.string.isRequired,
  rating  :PropTypes.number.isRequired
}

function App() {
  return  (<div>
    {gameLike.map(imglist => (
    <Game key={imglist.id}
     name={imglist.name} 
     picture={imglist.image}
     rating={imglist.rating}
     />))}
  </div>
  );
}

export default App;
