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
        const {carro} = this.props //sacar al carro se paso en el nav en app.js
        return(
            <nav style={styles.navbar}>
                <Logo/>
                <Carro carro={carro}/>
            </nav>
        )
    }
}

export default Navbar