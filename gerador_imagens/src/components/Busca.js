// componente de classe
// estado do componente

import React, {Component} from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default class Busca extends Component {
    state = {
        termoDeBusca: ""
    }

    onTermoAlterado = (event) => {
        console.log(event.target.value)
    }

    render(){
        return(
            // empilhando os filhos da div
            <div className="flex flex-column">
                {/* ícone à esquerda, largura máxima */}
                <span className="p-input-icon-left w-full">
                    {/* pi-search = ícone de lupa */}
                    <i className="pi pi-search"/>
                    <InputText
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
        )
    }
}

Busca.defaultProps = {
    dica: "Digite algo que deseja ver..."
}

