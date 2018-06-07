import React from 'react';
import AddCard from './AddCard';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            cards: []
        }
        this.addInfo = this.addInfo.bind(this);
    }

    addInfo = (card) => {
        console.log("Hello from Container!");
        console.log(card);
        this.setState((prevState) => ({
            cards: prevState.cards.push(card)
        }))
        console.log("state is now");
        console.log(this.state.cards);
    }
    render() {
        return (
            <div className="container">
                <AddCard 
                    addInfo={this.addInfo}
                />
            </div>
        )
    }
    
}

export default Container;