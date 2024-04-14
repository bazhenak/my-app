import "./index.css"
import "./App.css";
import React from "react";

function handleClick() {
    document.getElementsByClassName("text").valueOf('');
    console.log('button clicked')

}
const App = (props) => {
  return (
      <div className={"body"}>
          <h3>My name is {props.a}</h3>
          <input className={"text"} placeholder={"текст: " + props.placeHolder}></input>
          <button className={"button"}
                  onClick={handleClick}>{props.description}</button>

      </div>
  );
};

export default App;
