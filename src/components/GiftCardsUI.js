import React from 'react';
import Container from './Container';
import Header from './Header';
import Sidenav from './Sidenav';

class GiftCardsUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen = () => {
        this.setState((prevState) => ({sidebarOpen: !prevState.sidebarOpen}));
    }

    render() {
        return (
            <div>
                <Header />
                <Container />
                <Sidenav 
                    isOpen={this.state.sidebarOpen}
                    openSidebar={this.onSetSidebarOpen}
                />
            </div>
        );
    }
}



export default GiftCardsUI;