import { Component } from "react";  

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
      <p>hola mundo</p>
    )
  }
}



export default App;
