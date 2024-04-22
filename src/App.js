import "./index.css"
import "./App.css";
import React from "react";

function handleClick() {
    const data = document.getElementById("form").value='';
    document.getElementById("form").reset='';
    console.log('button clicked')

}
const App = (props) => {
  return (
      <div className={"body"}>
          <h3>My name is {props.a}</h3>
          <input type={"text"} id={"form"} className={"text"} placeholder={"текст: " + props.placeHolder}></input>
          <button type={"reset"} className={"button"}
                  onClick={handleClick}>{props.description}</button>

      </div>
  );
};

export default App;
