import React from 'react'
// cria a raiz da aplicação, que se refere ao ponto da arvore DOM onde o código
// de <App/> será carregado
import { createRoot } from 'react-dom/client'
import "./styles.css"

const App = () => {
    // JSX, é uma linguagem que mistura JavaScript com HTML
    const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}
    const estilosDiv = {margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}
    const estilosLabel = {display: 'block', marginBottom:4};
    const estilosInput = {paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden',width: '100%', borderRadius: 8, outline: 'none', boxSizing:'border-box'}
    const textoRotulo = "Nome:"
    const obterTextoDoBotao = () => {
        return "Enviar";
    }

    return(
        <div style={estilosDiv}>
            <label className="rotulo" htmlFor="nome" style={estilosLabel}>{textoRotulo}</label>
            <input type="text" id="nome" style={estilosInput}/>
            <button style={estilosBotao}>{obterTextoDoBotao()}</button>
        </div>
    )
}

//render = renderizar/construir a interface gráfica a partir do componente
// que representa a interface como um todo
// document = árvore HTML
// ReactDOM.render(<App/>, document.querySelector("#root"))
const root = createRoot(document.getElementById("root"))
root.render(<App/>)