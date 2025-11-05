import React, {Component} from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

// componente funcional
// const X = {return JSX}

// componente de classe vai ser representado por uma classe
// um componente de classe tem como vantagem a existencia de um estado
// 

export default class Busca extends Component {
    state = {
        termoDeBusca: ""
    }

    onTermoAlterado = (event) => {
        //event.target = <InputText/>
        // .value = valor atual escrito no componente <InputText/>
        console.log(event.target.value)
        // agora como guardamos o valor tual do campo de texto dentro do estado do componente, podemos dizer
        // que Busca é um componente controlado
        this.setState({termoDeBusca: event.target.value})
    }

    onFormSubmit = (event) => {
        // cancela o comportamento padrão do forms
        // não deixa o navegador submeter o form automaticamente
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    // método render() é chamado toda vez que existe alguma alteração no estado do componente
    render(){
        return(
            // Código JSX correspondente ao componente Busca
            <form onSubmit={this.onFormSubmit}>
                {/* empilhando os filhos da div */}
                <div className="flex flex-column">
                    {/* ícone à esquerda, largura máxima */}
                    <span className="p-input-icon-left w-full">
                        {/* pi-search = ícone de lupa */}
                        <i className="pi pi-search"/>
                        <InputText
                            value={this.state.termoDeBusca}
                            className="w-full"
                            onChange={this.onTermoAlterado}
                            placeholder={this.props.dica}
                        />
                    </span>
                    <Button
                        label="OK"
                        className="p-button-outlined mt-2"
                    />
                </div>
            </form>
        )
    }
}

Busca.defaultProps = {
    dica: "Digite algo que deseja ver..."
}

