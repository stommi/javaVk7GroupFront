import React, {Component} from 'react';
import PostRecipe from "../post/PostRecipe";

class Editing extends Component {
    render() {
        return (
            <div>
                <h2>Muokkaus</h2>
                <p>Täällä voit muokata reseptejä!</p>
                <PostRecipe/>
            </div>
        );
    }
}

export default Editing;