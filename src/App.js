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
    ],
    carro:[
      /*{ name: 'shell', price: 3000, img: '/productos/shell.jpg', cantidad: 0}*/
    ],
    esCarroVisible: false, //propiedad 
  }

  agregarAlCarro = (producto) => { /* prevenir el constexto de this */
    const {carro} = this.state //sacar el carro de compra
    if(carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name
      ? ({
        ...x,
        cantidad: x.cantidad + 1,
      })
      : x)
      return this.setState({ carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto, cantidad: + 1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){ //evitar que se abra al no tener nada y agregar y se muestre solo
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible}) //se pasa nivel abajo al nav
  }

  render () {
    const {esCarroVisible} = this.state
    return (
      <div>
        <Navbar carro={this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro}/>
        <Layout>
          <Title/>
          <Productos  //utlizamos el componente
          agregarAlCarro={this.agregarAlCarro} 
          productos = {this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}



export default App;
