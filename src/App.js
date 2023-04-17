import React, { useState } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ahmed",
      bio: "this is a bio about me",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      condition: false,
    };
    this.myFunction = this.myFunction.bind(this);
  }
  // state for name , bio , imgsrc , (true or false) and if condition the hide content

  myFunction(e) {
    this.setState({ condition: !this.state.condition });
    console.log(this.state.condition);
    if (this.state.condition === false) {
      document.querySelector(".App").style.visibility = "hidden";
    } else {
      document.querySelector(".App").style.visibility = "visible";
    }
  }
  render() {
    return (
      <div className="App-header">
        <div className="App">
          <h2>{this.state.name}</h2>
          <p>{this.state.bio}</p>
          <img src={this.state.imgSrc} width={300} />
        </div>
        <button onClick={this.myFunction}>Click me!</button>
      </div>
    );
  }
}

export default App;
