import { Component } from "react"

class Producto extends Component{
    render() {
        console.log(this.props) //ver la info del producto
        const {producto } = this.props
        return (
            <div>
                <img alt={producto} src={producto.img} height={200}></img>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                
            </div>
        )
    }
}

export default Producto