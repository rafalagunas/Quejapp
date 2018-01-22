import Main from './index';
import VerDenuncias from './components/VerDenuncias';
import DenunciarQueja from './components/DenunciarQueja';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    Home: { screen: Main },
    Buscar: { screen: VerDenuncias },
    Denunciar: { screen: DenunciarQueja } 
  });


export default App;