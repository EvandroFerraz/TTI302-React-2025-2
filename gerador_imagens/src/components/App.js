import React, {Component} from 'react'
import Busca from "./Busca"
import env from 'react-dotenv'
import ListaImagens from './ListaImagens'
import PexelsLogo from "./PexelsLogo"
import pexelsClient from '../utils/pexelsClient'

// importamos o método para criar um cliente de conexão à api do pexels
import {createClient} from 'pexels'

// componente funcional
// const Componente = () => { return JSX }

export default class App extends Component {
    // o estado de App será formado pela lista de fotos que o pexels  
    state = {
        pics: []
    }

    // onBuscaRealizada = (termo) => {
    //     this.pexelsCliente.photos.search(
    //         {
    //             query: termo
    //         }
    //         //setState() atualiza o estado atual do componente
    //     ).then(pics => this.setState({pics: pics.photos}))
    // }

    onBuscaRealizada = (termo) => {
        pexelsClient.get('/search', {
            params: {query: termo}
        })
        // result é um objeto que guarda a resposta da requisicao
        // data guarda os dados no corpo daquela resposta (JSON)
        .then(result => {
            console.log(result)
            this.setState({pics: result.data.photos})
        })
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
                <div class="col-12">
                    <PexelsLogo/>
                </div>
                <div className="col-12">
                    <h1>Exibir uma lista de ... </h1>
                </div>
                <div className="col-12">
                    <Busca onBuscaRealizada={this.onBuscaRealizada}/>
                </div>
                <div className="col-12">
                    <div className="grid">
                        <ListaImagens imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'} pics={this.state.pics}/>
                    </div>
                </div>
            </div>
        )
    }
}