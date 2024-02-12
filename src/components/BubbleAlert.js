import { Component } from "react";

const styles= {
    bubbleAlert: {
        backgroundColor: '#b887eb',
        borderRadius: '15px',
        padding: '1px 2px',
        color: 'white',
        fontSize: '1em',
        width: '20px'
    }
}


class BubbleAlert extends Component{
    getNumber(numero){
        if(!numero){
            return  ' '
        }
        return numero
    }

    render(){
        const { value } = this.props //destroctory
        return(
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert