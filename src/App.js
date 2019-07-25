import React from "react";
import friends from "./friends.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import { Container, Row, Col } from "./components/Grid";




// }
// function shuffleArray(array) {
//     let i = array.length - 1;
//     for (; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//     return array;
//   }

//   function handleClick
class App extends React.Component {

  state = {
    friends: friends,
  }

  handleClick = () => {

    console.log('works');

    this.setState({
      friends: this.state.friends.sort(() => Math.random() - 0.5)
    })
  }

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <FriendCard
          handleClick={this.handleClick}
          friends={this.state.friends} />
      </Wrapper>
    );
  }
}
export default App;
