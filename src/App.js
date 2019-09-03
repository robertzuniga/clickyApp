// Robert Zuniga App.js
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentPoints: 0,
    maxPoints: 0
  };

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  pointTotal = id => {
    this.state.friends.find((i, j) => {
      if (i.id === id) {
        if(friends[j].count === 0){
          friends[j].count = friends[j].count + 1;
          this.setState({currentPoints : this.state.currentPoints + 1}, function(){
            console.log("this.state.currentPoints ==> ",this.state.currentPoints);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.resetClicky();
        }
      }
      return console.log("==> pointTotal success <== ")
      // return console.log("pointTotal success ==> ", this.pointTotal)
    });
  }
  
  resetClicky = () => {
    if (this.state.currentPoints > this.state.maxPoints) {
      this.setState({maxPoints: this.state.currentPoints}, function() {
        console.log("this.state.maxPoints ==> ", this.state.maxPoints);
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    console.log("Repeated Click Choice  \n" + this.state.currentPoints + " :  currentPoints  \n" + this.state.maxPoints +" : maxPoints");
    this.setState({currentPoints: 0});
    return true;
  }


  render() {
    return (
      <div className="container">
      <Navbar currentPoints={this.state.currentPoints} maxPoints={this.state.maxPoints} />  
      {/* <Navbar currentPoints={this.state.currentPoints} /> */}
      <Jumbotron />
      {/* <Card /> */}
    
      <Wrapper>

        {/* <Title>Click but don't Repeat</Title> */}
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}        
            image={friend.image}
            pointTotal={this.pointTotal}
            />
        ))}
      </Wrapper>


      </div>
    );
  }
}

export default App;
