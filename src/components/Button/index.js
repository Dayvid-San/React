import React, { Component } from 'react'
import PropTypes from 'prop-types'



class Button extends Component {

    static defaultProps = {
        // Dessa forma não é necessário não é nessesário atribuir o title ao button
        title: 'Comportamento padrao'
    }

    static propTypes = {
        // Adicionando o isRequired, está dizendo que é necessario, sem ele, apenas diz que é opcional
        title: ProtoTypes.string.isRequired
    }


    componentWillMount() {
        console.log('ComponetWillMount')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }


    render () {
        return (
            <div>
                {this.props.title}
                <button onClick={this.props.press}>{this.props.children}</button>
                
            </div>
        )
    }
}


export default Button;