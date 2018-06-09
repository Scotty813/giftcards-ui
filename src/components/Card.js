import React from 'react';

const even = {
    color: '#72d832'
}
const odd = {
    color: '#009cde'
}

const Card = (props) => (
    <div className="card">
        <ion-icon 
            className="card-icon" 
            name="card"
            style={props.index%2 === 0 ? even : odd}
        >
        </ion-icon>
        <div className="header">
            <p className="company">{props.cardText.company}</p>
            <p className="amount">${props.cardText.amount}</p>
        </div>
    </div>
)

export default Card;