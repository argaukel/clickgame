import React from "react";
import friends from "./friends.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";

function App() {
    return (
        <Wrapper>
            <Title>Friends List</Title>
            <FriendCard friends={friends}/>
        </Wrapper>
    );
}

export default App;
