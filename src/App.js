import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FighterCard from "./components/FighterCard";
import fighters from "./fighters.json"


class App extends Component {

  state = {
    fighters,
    score = 0

  }

  shuffle = () => {
    var fighters = this.state.fighters
   
    //create an empty array to push the ids.  use an if an else to check for an id, else reset score to 0 and clear array
    
    //run through the fighters 
    
      for (let i = fighters.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [fighters[i], fighters[j]] = [fighters[j], fighters[i]];
      
      this.setState({fighters})
  }

  console.log("shuffled")
  }
  
  render() {
    return (
      <Wrapper>
      <Title>my weak react homework! SF CLICKY!</Title>
      
        {this.state.fighters.map(fighter=>(
        <FighterCard
        id={fighter.id}
        name={fighter.name}
        image={fighter.image}
        shuffle={this.shuffle}
        />
    ))}
      </Wrapper>
      
     
    );
  }
}

export default App;

