import { Component} from "react";
import BubbleAlert from './BubbleAlert';

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
        return(
            <div style={styles.pos}>
                <span style={styles.bubble}>
                    <BubbleAlert/>
                </span>
                <button style={styles.carro}>
                    Carrito
                </button>
                
            </div>
        )
    }
}

export default Carro