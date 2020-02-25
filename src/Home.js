import React, {Component} from 'react';
import logo from "./donut.png";

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Etusivu</h2>
                    <p>Tämä on etusivu. Tervetuloa!</p>
                </div>
            </div>
        );
    }
}

export default Home;