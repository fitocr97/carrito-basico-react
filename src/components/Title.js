import { Component } from "react";

const styles ={
    title:{
        marginBottom: '20px'
    }
}

class Title extends Component{
    render(){
        return (
            <h1 style={styles.title}>Productos</h1>
        )
    }
}

export default Title