import React from "react";
import "./FighterCard.css"


const FighterCard = props => (
    <div className="card" onClick={() => props.shuffle()}>
        <div className="img-container">
            <img alt={props.name} src={props.image}/>
        </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                </ul>
            </div>
    </div>
);

export default FighterCard;