import { Component } from "react";

const styles= {
    bubbleAlert: {
        backgroundColor: '#b887eb',
        borderRadius: '15px',
        padding: '1px 2px',
        color: 'white',
        fontSize: '1em',
        width: '20'
    }
}


class BubbleAlert extends Component{
    render(){
        return(
            <span style={styles.bubbleAlert}>5</span>
        )
    }
}

export default BubbleAlert