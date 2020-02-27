import React, {Component} from 'react';
import logo from "../../pictures/donut.png";
import pic5 from "../../pictures/pizza.jpg";

class Home extends Component {
    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo"/><br/><br/>
                <h2>Arkikokit</h2><br/>
                <img src={pic5} className="pizza-kuva" alt="pic1" height={300}/>
                <p>Sivusto tarjoaa herkulliset reseptit arkeen ja juhlaan.</p>
            </div>
        );
    }
}

export default Home;