import React from "react"

class Recipe extends React.Component {



    constructor() {
        super()
        this.state = {
            ingredient: []
        }}


        componentDidMount() {
            this.setState({loading: true})
            const url = "http://localhost:8080/api/ingredientsbycode?koodi="+this.props.product.id;
            fetch(url)
                .then(response => response.json())
                .then(response => this.setState({ingredient: response}))
        }



    render() {

        const ingredients = this.state.ingredient.map((item,i) =>
            <li key={i}>{item[0]} {item[1]} {item[2]}</li>);

                // <Ingredients key={item} product={item}/>)
        return (


            <div>
                <h2>{this.props.product.name}</h2>
                <p>Valmistusaika {this.props.product.preparationTime} min</p>
                <p>Valmistusohjeet: {this.props.product.preparationInstructions}</p>
                <p>Ainekset: {ingredients}</p>
                <hr/>
            </div>
        )
    }
}

export default Recipe


