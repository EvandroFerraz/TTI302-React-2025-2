import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {
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
                </div>
            </div>

            {/* segundo pedido */}
            <div className="row">   
                <div className="col-sm-8 col-md-6 m-2">
                    {/* cartão */}
                    <div className="card">
                        {/* cabeçalho do cartão */}
                        <div className="card-header text-muted">
                            20/04/2021
                        </div>
                        {/* corpo do cartão */}
                        <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                                {/* ícone do cartão */}
                                <i className="fas fa-book fa-2x"></i>
                            </div>
                            {/* informações do pedido */}
                            <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">Livro</h4>
                                <p className="text-center">Concrete Mathematics - Donald Knuth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* terceiro pedido */}
            <div className="row">   
                <div className="col-sm-8 col-md-6 m-2">
                    {/* cartão */}
                    <div className="card">
                        {/* cabeçalho do cartão */}
                        <div className="card-header text-muted">
                            25/12/2021
                        </div>
                        {/* corpo do cartão */}
                        <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                                {/* ícone do cartão */}
                                <i className="fas fa-laptop fa-2x"></i>
                            </div>
                            {/* informações do pedido */}
                            <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">Notebook</h4>
                                <p className="text-center">Notebook Dell - 8Gb - i5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const root = createRoot(document.getElementById("root"))
root.render(<App/>)