import { Component} from "react";
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
    carro: {
        backgroundColor: "#9ad5ee",
        border: 'none',
        padding: '15px',
        borderRadius: '10px',
        cursor: 'pointer'
    },
    bubble:{
        position: 'relative',
        marginStart: '2px',
        marginTop: '20px'
    },
    pos:{
        display:'flex',
        flexDirection:'row',
    }

}

class Carro extends Component{
    render(){
        const {carro, esCarroVisible,mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        //console.log("carr:",esCarroVisible)
        return(
            <div style={styles.pos}>
                <span style={styles.bubble}>
                    {cantidad !== -0  ? <BubbleAlert value={cantidad}/> : null }
                    
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carrito
                </button>
                
                {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
            </div>
        )
    }
}
/*<DetallesCarro carro={carro} /> */
export default Carro