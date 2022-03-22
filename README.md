# React


- Webpack: automatiza tudo. Faz um codigo mais entendivel para navegadores antigos
- Babel: o cara que faz a mágica acontecer
- Quando executamos o npm run build, ele chama o **webpack --mode production** e disso surge o arquivo **bundle.js**


## Componetes

- Para poder alterar o conteúdo diretamente no index principal, tu colocas o {this.props.children} dentro do **button**. Essa é uma forma de passar conteúdo de fora para dentro. Uma boa vantagem disso é a possibilidade de ter vários tipos do mesmo component. O nome desse conseito é **Children**

- Quando extendemos o **Component**, o ``render()`` se torna obrigatório

## Estado

O comportamento de **state** é uma das coisas mais importantes do React.<br>
- Apenas temos o comportamento de estado quando extendemos o componete.
- Só podemos ter uma interação em tempo real, quando temos um estado.
````js
state = {

  }
````
Quando fazemos a manuteção do estado, é redenrizado o render () novamente.



### Component stateful

- Temos quando fazemos o a extenção do **Component**
- Quando herdamos o Component, também herdamos o ciclo de vida

<br>
CURIOSIDADE: dá para ver o tempo de execução através do:

````js
componentWillMount() {
    console.log('Vai renderizar antes do render()')
  }

componentDidMount() {
    console.log('Esse vai renderizar depois do render()')
  }
````


### Component stateless

- Não tem a declaração de classes
- Não requer a declaração do render()

Components simples, no geral não precisam de um estado, como o butão por exemplo.

````js
const Button = (props) => {
    render () {
        return (
            <div>
                {props.title}
                <button onClick={props.press}>{props.children}</button>
                
            </div>
        )
    }
}
````
Essa seria uma boa forma de declarar o button, não como uma função mas como uma class. Dessa forma não precisa atribuír todas as funcionalidade de **Components**.