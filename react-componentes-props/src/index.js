import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
    const textoOK = "Já chegou"
    const textoNOK = "Ainda não chegou"
    const funcaoOK = () => alert("Agradecemos a confirmação")
    const funcaoNOK = () => alert("Verificaremos o ocorrido")
    const componenteFeedback = <Feedback textoOK={textoOK} textoNOK={textoNOK} funcaoOK={funcaoOK} 
    funcaoNOK={funcaoNOK}/>

    // JSX = Syntax Sugar para escrever código JavaScript bruto, tradutor Babel
    return(
        // container principal
        // container por padrão considera o breakpoint sm, que representa uma tela pequena
        // bootstrap divide a tela em 12 partes
        <div className="container border rounded mt-2">
            {/* linha para o título */}
            <div className="row border-bottom m-2">
                <h1 className="display-5 text-center">Seus pedidos</h1>
            </div>

            {/* primeiro pedido */}
            <div className="row">
                {/* controle de colunas para responsividade
                    xs < sm
                    sm = aproximadamente 570px de largura
                    md = aproximadamente 720px de largura    
                */}
                
                <div className="col-sm-8 col-md-6 m-2">
                    {/* aqui colocaremos os pedidos */}
                    <Cartao cabecalho = "18/10/25">
                        <Pedido icone="fas fa-hdd fa-2x" titulo="SSD" descricao="SSD Kingston A400 - SATA"/>
                        {componenteFeedback}
                    </Cartao>
                </div>
            </div>

            {/* segundo pedido */}
            <div className="row">
                <div className="col-sm-8 col-md-6 m-2">
                    {/* cartão */}
                    <Cartao cabecalho="19/10/25">
                        <Pedido data="19/10/25" icone="fas fa-book fa-2x" titulo="Livro" 
                        descricao="Concrete Mathematics - Donald Knuth"/>
                        {componenteFeedback}
                    </Cartao>
                </div>
            </div>
            
            {/* terceiro pedido */}
            <div className="row">   
                <div className="col-sm-8 col-md-6 m-2">
                    <Cartao cabecalho="20/10/25">
                        <Pedido icone="fas fa-laptop fa-2x" titulo="Notebook"
                        descricao="Notebook Dell - 8Gb - i5"/>
                        {componenteFeedback}
                    </Cartao>
                </div>
            </div>
        </div>
    );
}

const root = createRoot(document.getElementById("root"))
root.render(<App/>)