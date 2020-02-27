import React, {Component} from 'react';
import logo from "../../pictures/donut.png";
import pic5 from "../../pictures/pizza.jpg";

class Home extends Component {
    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Arkikokit</h2>
                <img src={pic5} className="pizza-kuva" alt="pic1" height={300}/>
                <p>Sivu tarjoaa herkulliset reseptit arkeen ja juhlaan.</p>
            </div>
        );
    }
}

export default Home;