import { Component } from "react";

const styles = {
    button: {
        backgroundColor: "#032E59",
        color: 'white',
        border: 'solid 1px black',
        padding: '10px',
        borderRadius: '5px'
    }
}

class Button extends Component {
    render() {
        return (
            <button  {...this.props} style={styles.button} />
        )
    }

}

export default Button