import React from 'react'

const Pedido = () => {
    // JSX para o criação do pedido
    return (
        <div className="card">
            {/* cabeçalho do cartão */}
            <div className="card-header text-muted">
                22/04/2021
            </div>
            {/* corpo do cartão */}
            <div className="card-body d-flex">
                <div className="d-flex align-items-center">
                    {/* ícone do cartão */}
                    <i className="fas fa-hdd fa-2x"></i>
                </div>
                {/* flex-grow 1: tomar espaço remanescente */}
                {/* informações do pedido */}
                <div className="flex-grow-1 ms-2 border">
                        <h4 className="text-center">SSD</h4>
                        <p className="text-center">SSD Kingston A400 - SATA</p>
                </div>
            </div>
        </div>
    );
}

export default Pedido;