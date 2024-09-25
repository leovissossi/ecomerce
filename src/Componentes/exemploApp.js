import logo from './logo.svg';
import './App.css';
import { ComponenteNome } from "./Componentes/ComponenteNome";
import { ResumoSobreVoce } from './Componentes/ResumoSobreVoce';
import { ComponenteCompetencia } from './Componentes/ComponenteCompetencia';

function App() {

  return (

    <div className="App">


      <ComponenteNome/>

      <ResumoSobreVoce>
        Olá, meu nome é Leonardo, sou desenvolvedor front-end e estou aprendendo React.
        Estou muito animado para aprender mais sobre essa biblioteca e criar aplicações incríveis.
        Espero que você goste do meu trabalho!
        Obrigado por visitar meu site.
      </ResumoSobreVoce>
      
      <ComponenteCompetencia
       nome = "leozera"
       descricao = "loko"
      />
      
        
      


    </div>
  );
}

export default App;
