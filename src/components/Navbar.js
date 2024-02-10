import { Component } from "react";

const styles={
    navbar:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        height: '80px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0px 20px',
        boxShadow: '0 2px 3px black'
    }
}

class Navbar extends Component{
    render(){
        return(
            <nav style={styles.navbar}>
                <p>Logo</p>
                <p>Carrito</p>
            </nav>
        )
    }
}

export default Navbar