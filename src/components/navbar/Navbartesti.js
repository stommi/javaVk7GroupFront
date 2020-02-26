import React, {Component} from 'react';
import Navbar from "./Navbar";
import GlobalStyle from '../../styles/Global';



class Navbartesti extends Component {
    state = {
        navbarOpen: false
    }
    handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    }

    render() {

        return (
            <div>
                <Navbar
                    navbarState={this.state.navbarOpen}
                    handleNavbar={this.handleNavbar}
                />
                <GlobalStyle />
            </div>
        );
    }
}

export default Navbartesti;