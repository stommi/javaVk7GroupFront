import React, {Component} from 'react';
import PostRecipe from "../post/PostRecipe";

class Editing extends Component {
    render() {
        return (
            <div>
                <h2>Lisää reseptejä</h2>
                <p>Alla voit lisätä omia reseptejä!</p>
                <PostRecipe/>
            </div>
        );
    }
}

export default Editing;