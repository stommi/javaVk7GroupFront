import React, {Component} from 'react';
import MainContent from "../search/MainContent";

class Recipes extends Component {
    render() {
        return (
            <div>
                <h2>Reseptit</h2>
                <p>Alla reseptejä</p>
                <MainContent/>
            </div>
        );
    }
}

export default Recipes;