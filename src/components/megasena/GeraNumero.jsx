import React, {useState} from "react"
import './MegaSena.css'

export default (props) => {

    function gerarNumerosUnicos(min, max, array) {
        const numero = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(numero) ? 
                gerarNumerosUnicos(min, max, array) : numero
    }
    
    function gerarNumerosMegaSena(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novo = gerarNumerosUnicos(1, 60, nums)
                console.log([...nums, novo])
                return [ ...nums, novo]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros 
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumerosMegaSena(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join('  ')}</h3>
            <div>
                <label>Qtde de Números</label>
                <input min="6" max="12" type="number" value={qtde} 
                       onChange={e => setQtde(+e.target.value)}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumerosMegaSena(qtde))}>Gerar Números</button>
        </div>
    )

}




