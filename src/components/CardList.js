import React from 'react';
import Card from './Card';

const CardList = (props) => (
    <div>
        {!props.cards.length && <p className="no-content">Add a card to get started!</p>}
        <div className="list-container">
            {
                props.cards.map((card, index) => (
                    <Card 
                        key={card}
                        cardText={card}
                        index={index}
                    />
                ))
            }
        </div>
    </div>
)
// MAKE ROWS OF 3 CARDS EACH
//Add input for company name
//make it badass
export default CardList;