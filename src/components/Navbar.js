import { Component } from "react";
import Logo from './Logo'
import Carro from './Carro'

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
                <Logo/>
                <Carro/>
            </nav>
        )
    }
}

export default Navbar