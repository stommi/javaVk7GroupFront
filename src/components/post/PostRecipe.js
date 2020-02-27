import React, {Component} from "react";
import '../../styles/editingTable.css';
import '../../styles/meme.css';

class PostRecipe extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            ingredientAmount: [],
            ingredientMeasureType: [],
            ingredientName: [],
            preparationTime: "",
            preparationInstructions: "",
            kiitos: ""

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


        handleSubmit() {
            this.addRecipe().then(() => {
                this.addIngredients();
            })
            this.setState({
                kiitos: <div className="meme">
                    <img src="https://i0.wp.com/austinfoodmagazine.com/wp-content/uploads/2016/01/Gordon-Ramsay-shouting-011.jpg?fit=667%2C400" alt="" />
                    <h2 className="top">Kuka helvitissä laittaa {this.state.ingredientName[0]}?</h2>
                    <h2 className="bottom">{this.state.name} ohjeseen?</h2>
                </div>
            })
        }



    addRecipe() {
        const url = "http://localhost:8080/api/recipes"
        const reccipeAsJson = JSON.stringify({
            name: this.state.name,
            preparationTime: this.state.preparationTime,
            preparationInstructions: this.state.preparationInstructions
        })
        console.log(reccipeAsJson)
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: reccipeAsJson
        })

    }

    addIngredients() {
        var index = 0;
        var ingredients = []
        while (index < this.state.ingredientName.length) {
            var name = this.state.ingredientName[index]
            var amount = this.state.ingredientAmount[index]
            var measureType = this.state.ingredientMeasureType[index]
            var ingredient = {name: name, amount: amount, unit: measureType}
            ingredients.push(ingredient)
            console.log("Ingredient = " + JSON.stringify(ingredients))
            index++
        }
        const url = "http://localhost:8080/api/ingredientlist"
        const ingredientsAsJson = JSON.stringify(ingredients)
        console.log(ingredientsAsJson)
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: ingredientsAsJson
        })
    }

    addIngredient() {
        this.setState({ingredientAmount: [...this.state.ingredientAmount, ""]})
        this.setState({ingredientMeasureType: [...this.state.ingredientMeasureType, ""]})
        this.setState({ingredientName: [...this.state.ingredientName, ""]})
    }


    handleChangeIngredientAmount(e, index) {
        this.state.ingredientAmount[index] = e.target.value
        this.setState({ingredientAmount: this.state.ingredientAmount})

    }

    handleChangeIngredientMeasureType(e, index) {
        this.state.ingredientMeasureType[index] = e.target.value
        this.setState({ingredientMeasureType: this.state.ingredientMeasureType})

    }

    handleChangeIngredientName(e, index) {
        this.state.ingredientName[index] = e.target.value
        this.setState({ingredientName: this.state.ingredientName})

    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <form name="AddRecipe" className="form-recipe" /*onSubmit={this.handleSubmit}*/>
                <div>
                    <table className={"editingTable"}>
                        <tbody>
                        <tr>
                            <br/>
                            Reseptin nimi:
                            <br/><input type="text"
                                   value={this.state.name}
                                   name="name"
                                   id="namefield"
                                   onChange={this.handleChange}/>
                        </tr>
                        <tr>
                            <br/>
                            Aineosat:

                        </tr>
                        <tr>
                            <td>
                                {
                                    this.state.ingredientName.map((ingredient, index) => {
                                        return (
                                            <div key={index}>
                                                Ainesosa<input
                                                onChange={(e) => this.handleChangeIngredientName(e, index)}
                                                value={ingredient}/>
                                            </div>
                                        )
                                    })
                                }
                            </td>

                            <td>
                                {
                                    this.state.ingredientAmount.map((ingredient, index) => {
                                        return (
                                            <div key={index}>
                                                Määrä<input
                                                onChange={(e) => this.handleChangeIngredientAmount(e, index)}
                                                value={ingredient}/>
                                            </div>
                                        )
                                    })
                                }
                            </td>
                            <td>
                                {
                                    this.state.ingredientMeasureType.map((ingredient, index) => {
                                        return (
                                            <div key={index}>
                                                Mittayksikkö<input
                                                onChange={(e) => this.handleChangeIngredientMeasureType(e, index)}
                                                value={ingredient}/>
                                            </div>
                                        )
                                    })
                                }
                            </td>


                        </tr>
                        <tr>
                            <input type="button"
                                   value="Lisää ainesosa"
                                   onClick={(e) => this.addIngredient(e)}/>
                        </tr>
                        <tr>
                            <br/>


                            Valmistusaika:
                            <br/>
                            <input type="number"
                                   value={this.state.preparationTime}
                                   name="preparationTime"
                                   id="preparationtimefield"
                                   onChange={this.handleChange}/>


                        </tr>
                        <br/>
                        Valmistusohjeet:
                        <br/>

                        <textarea rows="10" cols="50"
                                  value={this.state.preparationInstructions}
                                  name="preparationInstructions"
                                  id="preparationinstructionfield"
                                  onChange={this.handleChange}></textarea>
                        <br/><br/><input type="button"
                                         name="addrecipe"
                                         value="Lisää resepti"
                                         onClick={this.handleSubmit}/>
                        </tbody>
                    </table>
                </div>
                <h2>{this.state.kiitos}</h2>
            </form>
        )
    }
}

export default PostRecipe
