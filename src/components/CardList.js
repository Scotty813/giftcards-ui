import React from 'react';
import Card from './Card';

const CardList = (props) => (
    <div>
        {!props.cards.length && <p className="no-content">Add a card to get started!</p>}
        <div>
            {
                props.cards.map((card) => (
                    <Card 
                        key={card}
                        cardText={card}
                        
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