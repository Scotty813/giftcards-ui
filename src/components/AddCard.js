import React from 'react';

class AddCard extends React.Component {
    constructor(props) {
        super(props);
        //Do I need state here?? not sure...

        this.addInfo = this.addInfo.bind(this);
    }

    addInfo = (e) => {
        e.preventDefault();
        const cardNumber = e.target.elements.cardNumber.value.trim();
        const pin = e.target.elements.pin.value.trim();

        console.log(cardNumber);
        console.log(pin);
    }
    
    render() {
        return (
            <div className="add-card">
                <div>
                    <p>My Account  >  My Cards</p>
                    <h2>My Cards</h2>
                </div>
                <div>
                    <form onSubmit={this.addInfo}>
                        <div>
                            <label>Card Number</label>
                            <input type="text" name="cardNumber"/>
                        </div>

                        <div>
                            <label>Pin</label>
                            <input type="text" name="pin"/>
                        </div>

                        <div className="checkmark">
                            <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </div>
                    </form>
                </div> 
            </div>
        )
    }
}

export default AddCard;