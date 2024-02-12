import { Component } from "react";
import Producto from "./Producto";

const styles ={
    detallesCarro:{

        backgroundColor: '#ffff',
        position: 'absolute',
        marginTop: '50px',
        boxShadow: '1px 5px 5px black',
        borderRadius: '2px',
        width: '150px',
        right: 0,
        marginRight: '5px'

    },
    ul:{
        margin:0,
        padding:0
    },
    prodcuto:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 15px',
        borderBottom: 'solid 1px gray'
    }
}


class DetallesCarro extends Component{
    render(){
        const {carro} = this.props
       /* console.log(carro)*/
        return(
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(x => 
                    <li style={styles.prodcuto} key={x.name}>
                        <img alt={x.name} src={x.img} width='50' height='50'/>
                        {x.name} 
                        <span>{x.cantidad}</span>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro