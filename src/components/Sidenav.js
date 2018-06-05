import React from 'react';
import Sidebar from 'react-sidebar';

const Sidenav = (props) => (
    <Sidebar
        sidebar={(
            <div className="sidenav">
                <nav>
                    <ion-icon 
                        name="close"
                        onClick={props.openSidebar}
                    >
                    </ion-icon>
                    <ul>
                        <li><a>My Account</a></li>
                        <li><a>Manage Cards</a></li>
                        <li><a>Marketplace</a></li>
                        <div className="bottom-nav">
                            <li><ion-icon name="help-circle-outline"></ion-icon><a>Get Help</a></li>
                            <li><ion-icon name="log-out"></ion-icon><a>Sign Out</a></li>
                        </div>
                    </ul>
                </nav>
            </div>
        )}
        open={props.isOpen}
        onSetOpen={props.openSidebar}
    >
        <ion-icon 
            onClick={props.openSidebar} 
            name="menu" 
            style={styles.hamburgerStyle}
        >
        </ion-icon>
    </Sidebar>
);

const styles = {
    hamburgerStyle: {
        color: 'white',
        fontSize: '32px',
        marginLeft: '24px',
        position: 'relative',
        top: '16px',
        cursor: 'pointer'
    }
}

export default Sidenav;