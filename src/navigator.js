import Main from './index';
import VerDenuncias from './components/VerDenuncias';
import DenunciarQueja from './components/DenunciarQueja';
import { StackNavigator } from 'react-navigation';
import BuscarDenuncias from './components/BuscarDenuncias';
import ResultadoBusqueda from './components/ResultadoBusqueda';
import Conoce from './components/Conoce';

const App = StackNavigator({
    Home: { screen: Main },
    Generales: { screen: VerDenuncias },
    Buscar: { screen: BuscarDenuncias },
    Resultado: { screen: ResultadoBusqueda },
    Denunciar: { screen: DenunciarQueja },
    Conoce: { screen: Conoce }
  });


export default App;