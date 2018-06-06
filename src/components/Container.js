import React from 'react';
import AddCard from './AddCard';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            cards: []
        }
        // this.addInfo = this.addInfo.bind(this);
    }
    render() {
        return (
            <div className="container">
                <AddCard 
                    // addInfo={this.addInfo}
                />
            </div>
        )
    }
    
}

export default Container;