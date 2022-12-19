
import { useState } from "react";
  

function ButtonEsquivar (props){

    const [posicao, setPosicao] = useState(1);
    const [transform, setTransform] = useState("");
  

    function esquivar(){
        setPosicao(posicao + 1);
        console.log(posicao);
        if(posicao === 1){
            setTransform("botao-esquivar-1")
        }
        if(posicao === 2){
            setTransform("botao-esquivar-2")
        }
        if(posicao === 3){
            setTransform("botao-esquivar-3")
            alert("Vai tentar fugir até quando?")
        }
        if(posicao === 4){
            setTransform("botao-esquivar-4")
        }
        if(posicao === 5){
            setTransform("botao-esquivar-5")
            setPosicao(1);
        }
                
      }

    return(
        <button onClick={esquivar} className={transform} id="botao-esquivar">{props.name}</button>
    )
}

export default ButtonEsquivar;