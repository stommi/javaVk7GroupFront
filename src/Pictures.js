import React, {Component} from 'react';
import pic1 from "./burger1.jpg";

class Pictures extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Kuvia</h2>
                    <p>Alla herkullisia kuvia</p>
                    <img src={pic1} className="burger1-kuva" alt="pic1" height={400}/>
                </div>
            </div>
        );
    }
}

export default Pictures;