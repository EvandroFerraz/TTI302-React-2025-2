import React, {Component} from 'react'
import Busca from "./Busca"
import env from 'react-dotenv'

// importamos o método para criar um cliente de conexão à api do pexels
import {createClient} from 'pexels'

export default class App extends Component {
    // state = {}

    onBuscaRealizada = (termo) => {
        this.pexelsCliente.photos.search(
            {
                query: termo
            }
        ).then(pics => console.log(pics))
    }

    pexelsCliente = null
    // método de ciclo de vida que é executado no momento em que o componente
    // é carregado pela primeira vez
    componentDidMount(){
        // pexelsCliente se torna um objeto que representa a conexao estabelecida
        // com a api do pexels
        this.pexelsCliente = createClient(env.PEXELS_KEY)
    }

    render(){
        // imprime o valor guardado na variável PEXELS_KEY dentro do .env na raiz do projeto
        console.log(env.PEXELS_KEY)
        // retorna JSX
        return(
            <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
                <div className="col-12">
                    <h1>Exibir uma lista de ... </h1>
                </div>
                <div className="col-8">
                    <Busca onBuscaRealizada={this.onBuscaRealizada}/>
                </div>
            </div>
        )
    }
}