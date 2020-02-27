import React from "react"

class Ingredients extends React.Component {

    render() {
        return (
            <div>
                <p>Ainesosa: {this.props.product.name}</p>
                <p>Määrä: {this.props.product.amount}</p>
                <p>Unit: {this.props.product.unit}</p>
            </div>
        )
    }
}

export default Ingredients