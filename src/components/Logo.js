import React from "react";
const Title = (props) => <h1>{props.appName}</h1>;
const Logo = (props) => {
  //function logWhenClicked(){
   // console.log("hello")
  //}
  const appName = "Luna's pokedex";
  return (
    <header>
      <Title appName={appName} fabulous="true" />
      {/* <h1>Welcome to the Pokedex</h1> */}
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        onClick={props.handleClick}
        alt=""
      />
    </header>
  );
};

export default Logo;
