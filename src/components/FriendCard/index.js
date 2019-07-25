import React from "react";
import "./style.css";

function FriendCard(props) {
    return (
        <div className="row">
            {
                props.friends.map(friend =>
                    (
                        <div className="card" key={friend.id}>
                            <div className="img-container">
                                <img onClick={props.handleClick} alt={friend.name} src={friend.image} />
                            </div>
                            {/* <div className="content">
                                <ul>
                                    <li>
                                        <strong>Name:</strong>
                                        {friend.name}
                                    </li>
                                    <li>
                                        <strong>Occupation:</strong>
                                        {friend.occupation}
                                    </li>
                                    <li>
                                        <strong>Location:</strong>
                                        {friend.location}
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    )
                )
            }
        </div>
    );
}

export default FriendCard;
