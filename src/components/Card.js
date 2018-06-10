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
            name="close" 
            id="delete-icon"
            onClick={(e) => {
                props.handleDeleteCard(props.index);
            }}
        >
        </ion-icon>

        <ion-icon 
            className="card-icon" 
            name="card"
            style={props.index%2 === 0 ? odd : even}
        >
        </ion-icon>

        <div className="header">
            <p className="company">{props.cardText.company}</p>
            <p className="amount">${props.cardText.amount}</p>
        </div>
        <div className="card-details">
            <p>Card Number: <span>{props.cardText.cardNumber}</span></p>
            <p>PIN: <span>{props.cardText.pin}</span></p>
        </div>
    </div>
)

export default Card;