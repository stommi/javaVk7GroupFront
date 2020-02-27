import React, {Component} from "react";
class PostRecipe extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            ingredientAmount: [],
            ingredientMeasureType:[],
            ingredientName:[],
            preparationTime: "",
            preparationInstructions: ""


        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(){
        this.addRecipe().then(()=>{
            this.addIngredients();
        })

    }
    addRecipe(){
        const url = "http://localhost:8080/api/recipes"
        const reccipeAsJson = JSON.stringify({name: this.state.name, preparationTime: this.state.preparationTime, preparationInstructions: this.state.preparationInstructions})
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
    addIngredients(){
        var index = 0;
        var ingredients = []
        while(index<this.state.ingredientName.length){
            var name = this.state.ingredientName[index]
            var amount = this.state.ingredientAmount[index]
            var measureType = this.state.ingredientMeasureType[index]
            var ingredient = {name:  name, amount: amount, unit: measureType}
            ingredients.push(ingredient)
            console.log("Ingredient = "+JSON.stringify(ingredients))
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




    handleChangeIngredientAmount(e, index){
        this.state.ingredientAmount[index]=e.target.value
        this.setState({ingredientAmount: this.state.ingredientAmount})

    }
    handleChangeIngredientMeasureType(e, index){
        this.state.ingredientMeasureType[index]=e.target.value
        this.setState({ingredientMeasureType: this.state.ingredientMeasureType})

    }
    handleChangeIngredientName(e, index){
        this.state.ingredientName[index]=e.target.value
        this.setState({ingredientName: this.state.ingredientName})

    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }
    

    render() {
        return (
            <form name="AddRecipe" className="form-recipe" /*onSubmit={this.handleSubmit}*/>
                <div>
                    <table>
                        <tbody>
                            <tr>
                <p>Name: </p>
                    <input type="text"
                           value={this.state.name}
                           name="name"
                           id = "namefield"
                           onChange={this.handleChange}/>
                            </tr>
                            <tr>

                <p>Ingredients: </p>
                            </tr>
                            <tr>
                                <td>
                        {
                    this.state.ingredientAmount.map((ingredient, index)=>{
                        return (
                            <div key ={index}>
                                Amount<input onChange={(e)=>this.handleChangeIngredientAmount(e, index)} value = {ingredient}/>
                            </div>
                        )
                    })
                }
                                </td>
                                <td>
                    {
                        this.state.ingredientMeasureType.map((ingredient, index)=>{
                            return (
                                <div key ={index}>
                                    Measure Type<input onChange={(e)=>this.handleChangeIngredientMeasureType(e, index)} value = {ingredient}/>
                                </div>
                            )
                        })
                    }
                                </td>
                                <td>
                                    {
                        this.state.ingredientName.map((ingredient, index)=>{
                            return (
                                <div key ={index}>
                                    Ingredient Name<input onChange={(e)=>this.handleChangeIngredientName(e, index)} value = {ingredient}/>
                                </div>
                            )
                        })
                    }
                                </td>

                            </tr>
                            <tr>
                    <input type="button"
                           value="+"
                           onClick={(e)=>this.addIngredient(e)} />
                            </tr>
                            <tr>
                                <td>
                <p>Preparation Time: </p>
                                </td>
                                <td>
                    <input type="number"
                           value={this.state.preparationTime}
                           name="preparationTime"
                           id="preparationtimefield"
                           onChange={this.handleChange}/>
                                </td>
                            </tr>
                <p>Preparation Instructions: </p>
                    <input type="text"
                           value={this.state.preparationInstructions}
                           name="preparationInstructions"
                           id="preparationinstructionfield"
                           onChange={this.handleChange}/>
                    <input type="button"
                           name="addrecipe"
                           value="Add Recipe"
                           onClick={this.handleSubmit} />
                        </tbody>
                    <h2>{this.state.name} {this.state.ingredientAmount} {this.state.ingredientName} {this.state.ingredientMeasureType} {this.state.preparationTime} {this.state.preparationInstructions}</h2>
                    </table>
                </div>
            </form>
        )
    }
}
export default PostRecipe
