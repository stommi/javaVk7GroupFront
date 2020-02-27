import React, {Component} from 'react';
import pic1 from "../../pictures/burger1.jpg";
import pic2 from "../../pictures/meat.jpg";
import pic3 from "../../pictures/vegan.jpg";
import pic4 from "../../pictures/fish.jpg";

class Pictures extends Component {
    render() {
        return (
            <div>
                <h2>Kuvia</h2>
                <p>Alla herkullisia kuvia</p>
                <img src={pic1} className="burger1-kuva" alt="pic1" height={400}/>
                <br/>
                <img src={pic2} className="meat-kuva" alt="pic2" height={300}/>
                <br/>
                <img src={pic3} className="vegan-kuva" alt="pic3" height={400}/>
                <br/>
                <img src={pic4} className="fish-kuva" alt="pic4" height={400}/>
            </div>
        );
    }
}

export default Pictures;