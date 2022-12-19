import './App.css';
import './componentes/ButtonEsquivar';
import ButtonEsquivar from './componentes/ButtonEsquivar';
import 'material-icons';


function App() {

  
  return (
    <div className='container-app'>
      <div className="App">
        <h1 className='title'>Convite</h1>
        <h3 className='ask'>Topa assistir o filme comigo?</h3>
        <span class="material-icons">
        movie</span>
        <h4>Ai que Vida! / O filho de Gabriela</h4>
        <div id='container-button'>
          <button id="botao-certo"><a href="https://www.youtube.com/results?search_query=git+puh+2.39">Sim</a></button>
          <ButtonEsquivar name="Não"/>
        </div>
      </div>
    </div>
  );
}

export default App;
