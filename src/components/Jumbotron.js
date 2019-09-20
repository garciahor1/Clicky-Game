import React from "react";
import "./Jumbotron.css"

function Jumbotron (props){

    return(
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <p id="p">Memory game, don’t click on the same image more than once. If you click on the same image more than once your score will be reset to zero, your top score will remain. 
</p>
          <h1 className="display-4">Score = {props.score}</h1>
          <h1 className="display-4">Top Score = {props.topScore}</h1>
        </div>
      </div> 
    );

}

export default Jumbotron;