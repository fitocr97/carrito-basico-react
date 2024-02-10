import { Component } from "react";

const styles = {
    logo: {
        fontSize: '2em'
    }
}

class Logo extends Component{
    render(){
        return(
            <p style={styles.logo}>Logo</p>
        )
    }
}

export default Logo