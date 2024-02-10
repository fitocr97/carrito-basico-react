import { Component } from "react";

const styles = {
    layout:{
        backgroundColor: 'white',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    container:{
        width: '750px' /*  */
    }
}

class Layout extends Component{
    render(){
        return ( //impirmir los productos primer div centrar contenido, segundo darle ancho 1200
            <div style ={styles.layout}> 
                <div style={styles.container}>
                    {this.props.children}
                    
                </div>
            </div>
        )
    }
}

export default Layout