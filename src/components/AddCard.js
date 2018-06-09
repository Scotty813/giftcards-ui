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
        const company = e.target.elements.company.value.trim();
        
        const card = {
            cardNumber,
            pin,
            company
        }
        this.props.addInfo(card);

        e.target.elements.cardNumber.value = "";
        e.target.elements.pin.value = "";
        e.target.elements.company.value = "";
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
                            <input type="password" name="pin" maxLength="4" size="8"/>
                        </div>

                        <div>
                            <label>Company</label>
                            <input type="text" name="company"/>
                        </div>

                        <div className="checkmark">
                            <button>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                            </button>
                        </div>
                    </form>
                </div> 
            </div>
        )
    }
}

export default AddCard;