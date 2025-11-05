import React from 'react'

// componente funcional
// pic = photo.src.small
const Imagem = ({pic}) => {
    return(
        <div>
            <img alt="" src={pic}/>
        </div>
    )
}
export default Imagem