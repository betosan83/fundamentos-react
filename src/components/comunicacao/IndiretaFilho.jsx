import React from 'react'

export default props => {
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                e => props.quandoClicar('Beto', 37, true)
            }>
                Fornecer Informações
            </button>
        </div>
    )
}