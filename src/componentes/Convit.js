import ButtonEsquivar from "./ButtonEsquivar";
import { useState } from "react";
function Convit(){
    const [open, setOpen] = useState(false);
    const [convit, setConvit] = useState("fade");

    function openConvit(){

        if(open === false){
            setOpen(true);
            setConvit("convite-open");
        }
    }

    return(
    <>  
        <div className={convit}>
            <div className="heat">
                <span class="material-icons">favorite</span>
                <h4><a href="https://youtu.be/W1kKS7aNzf8">Link para o filme</a></h4>
                <span class="material-icons">favorite</span>
            </div>
            <h5>Caso tenha aceitado o convite deixa para assistir sexta comigo</h5>
            </div>
        <div className="container-convit">
            <div className="parteOne"></div>
            <div className="App">
                <h1 className='title'>Convite</h1>
                <h3 className='ask'>Topa assistir o filme comigo?</h3>
                <span className="material-icons" id="movie">
                movie</span>
                <h4>Ai que Vida! / O filho de Gabriela</h4>
                <div id='container-button'>
                <button id="botao-certo" onClick={openConvit}>Sim</button>
                <ButtonEsquivar name="Não"/>
                </div>
            </div>
            <div className="parteTwo"></div>
        </div>

    </>
    )
}

export default Convit;