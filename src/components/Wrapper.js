import React from 'react';
import AddCard from './AddCard';
import CardList from './CardList';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            cards: []
        }
        this.addInfo = this.addInfo.bind(this);
        this.handleDeleteCard = this.handleDeleteCard.bind(this);
    }

    addInfo = (card) => {
        this.setState((prevState) => ({
            cards: prevState.cards.concat(card)
        }))
    }

    handleDeleteCard = (cardToRemove) => {
        console.log("Delete is working! sort of...");
        this.setState((prevState) => ({
            cards: prevState.cards.filter((card, i) =>  cardToRemove !== i)
        }));
    }

    render() {
        return (
            <div className="container">
                <AddCard addInfo={this.addInfo} />
                <CardList  
                    cards={this.state.cards}
                    handleDeleteCard={this.handleDeleteCard}
                />
            </div>
            
        )
    }
    
}

export default Wrapper;