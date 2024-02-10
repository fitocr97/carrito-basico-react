import { Component } from "react";  
import Productos from "./components/Productos";  //llamamos al componente
import Layout from "./components/Layout"  //centrar los componentes
import Title from "./components/Title"  //centrar los componentes
import Navbar from "./components/Navbar"  //centrar los componentes

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
      <div>
        <Navbar/>
        <Layout>
          <Title/>
          <Productos  //utlizamos el componente
          agregarAlCarro={() => console.log('no hace nasda')} 
          productos = {this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}



export default App;
