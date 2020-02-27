import React from "react";
import Recipe from "./Recipe";

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            recipe: []
        }
    }
    componentDidMount() {
        this.setState({loading: true})
        const url = "http://localhost:8080/api/recipes"
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({recipe: response}))
    }

    render() {
        const recipes = this.state.recipe.map((item) =>
        <Recipe key={item.id} product={item}/>)

        function handleClick() {
            console.log("I was clicked")
        }

        return (
            <div>
                {/*<button onClick={handleClick}>Etsi</button>*/}
                <br/>
                {recipes}
            </div>
        )
    }
}

export default MainContent;




