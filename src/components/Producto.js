import { Component } from "react"

const styles ={ //estilos para el  div del producto
    producto: {
        border: 'solid 2px #eee',
        boxShadow: '0px 5px 5px #154360',
        width: '30%',
    },
    img:{
        width: '100%'
    }
}

class Producto extends Component{
    render() {
        console.log(this.props) //ver la info del producto
        const {producto } = this.props
        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto} src={producto.img} ></img>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                
            </div>
        )
    }
}

export default Producto