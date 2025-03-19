import React, {useState} from 'react'

const HookQuina = () => {

    const [sorteado, setSorteado] = useState()
    const [listaSorteados, setListaSorteados] = useState([])

    function sortearNumero() {
        if (listaSorteados.length < 5){
            let numeroSorteado = Math.floor(Math.random()*80) + 1

            setSorteado(numeroSorteado)
            setListaSorteados([...listaSorteados, numeroSorteado])

        } else {
            alert('Já foram sorteados 5 números.')
        }

    }

  return (

    <div>
        <h1>Sorteador da Quina em React</h1>
        <button onClick={sortearNumero}>Sortear número</button>
        <h1>Último número sorteado: {sorteado}</h1>
        <h1>Sorteados: {listaSorteados.join(' - ')}</h1>
    </div>
  
)

}

export default HookQuina