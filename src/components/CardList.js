import React from 'react';
import Card from './Card';
import { CSSTransitionGroup } from 'react-transition-group'

const CardList = (props) => (
    <div>
        {!props.cards.length && <p className="no-content">Add a card to get started!</p>}
        <div className="list-container">
            {props.cards.map((card, index) => (          
                <Card 
                    key={index}
                    cardText={card}
                    index={index}
                    handleDeleteCard={props.handleDeleteCard}
                />
            ))}
        </div>        
    </div>
)

export default CardList;

 


