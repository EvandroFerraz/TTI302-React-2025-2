import React from 'react'
// cria a raiz da aplicação, que se refere ao ponto da arvore DOM onde o código
// de <App/> será carregado
import { createRoot } from 'react-dom/client'

const App = () => {
    // JSX, é uma linguagem que mistura JavaScript com HTML
    return <div> Meu primeiro componente React </div>
}

//render = renderizar/construir a interface gráfica a partir do componente
// que representa a interface como um todo
// document = árvore HTML
// ReactDOM.render(<App/>, document.querySelector("#root"))
const root = createRoot(document.getElementById("root"))
root.render(<App/>)