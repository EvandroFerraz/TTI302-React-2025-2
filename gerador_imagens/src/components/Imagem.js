import React from 'react'

// componente funcional
// pic = photo.src.small
const Imagem = ({pic, imgStyle}) => {
    return(
        <div className={`${imgStyle} flex justify-content-center`}>
            <img className="border-radius" alt="" src={pic}/>
        </div>
    )
}
export default Imagem