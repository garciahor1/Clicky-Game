
import Jumbotron from './components/Jumbotron';
import ImageThumbnail from './components/ImageThumbnail';
import React, { Component } from "react";
import images from "./images.json";


class App extends Component {

  state = {
    images,
    picked: [],
    score: 0,
    topScore: 0
  }

  personAdded = id => {
    if (this.state.picked.includes(id)) {
      console.log("didnt add");
      alert("Winter is coming…\n"+"You clicked on the same image")
      this.setState({ score: 0 });
      this.setState({ picked: [] });
    } else {

      const originalArray = this.state.images;
      const newArray = [];

      while(originalArray.length>0){
      const ranNumber = Math.floor(Math.random() * originalArray.length);
      const toNewArray = originalArray[ranNumber];
      newArray.push(toNewArray);
      originalArray.splice(ranNumber,1);
      console.log(newArray);
      console.log("\n")
      console.log(originalArray);
      }
      
      this.setState({images:newArray})

      this.setState({ picked: [...this.state.picked, id] });
      const score = this.state.score + 1;
      if (score > this.state.topScore) {
        this.setState({ topScore: score });
      };
      this.setState({ score: score });
    };
  };

  render() {
    return (
      <div>
        <Jumbotron score={this.state.score} topScore={this.state.topScore} />
        <div className="container">
          <div className="row">
            <div className="col">
              {this.state.images.map(item => {
                return (
                  <ImageThumbnail
                    key={item.id}
                    id={item.id}
                    src={item.image}
                    name={item.name}
                    personAdded={this.personAdded} />
                )
              })}

            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
