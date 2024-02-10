import { Component } from "react";  
import Productos from "./components/Productos";  //llamamos al componente
import Layout from "./components/Layout"  //centrar los componentes

class App extends Component{
  state = {
    productos: [
      { name: 'colibri', price: 2000, img: '/productos/colibri.jpg'},
      { name: 'lapa', price: 1500, img: '/productos/lapa.jpg'},
      { name: 'shell', price: 3000, img: '/productos/shell.jpg'}
    ]
  }

  render () {
    return (
      <Layout>
        <Productos  //utlizamos el componente
        agregarAlCarro={() => console.log('no hace nasda')} 
        productos = {this.state.productos}
        />
      </Layout>
     
    )
  }
}



export default App;
