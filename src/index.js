import React from 'react';
import { render } from 'react-dom';
import Button from './components/Button'

class App extends React.Component {


  state = {
    contador: 0,
    nome: ''
  }


  changeText = (event) => {
    this.setState({
      nome: this.state.value,
    })
  }

  adicionar = () =>{
    this.setState({
      contador: this.state.contador+1,
    })
    
  }

  

  render() {
    console.log('render')
    return (

      <div>
      <h1>
        Hello React!! test
      </h1>
      <input onChange={this.changeText} />
      nome: {this.state.nome}
      contador: {this.state.contador}
        <Button press={this.adicionar}>
          Update
        </Button>
        <Button>
          Salvar
        </Button>

      </div>
    );
  }
}

render(<App />, document.getElementById('app'));