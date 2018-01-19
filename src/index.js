/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import VerDenuncias from './VerDenuncias';


class Main extends Component {
    static navigationOptions = {
        header: null 
      };

      render() {
      const { navigate } = this.props.navigation;

      return (
      <View style={styles.container}>

        <View style={styles.title}>
             <Text style={styles.titleText}>Quejapp,{"\n"} visualiza o denuncia quejas públicamente por dependencia pública. </Text>
        </View>
        
         <TouchableOpacity
          onPress={() => navigate('Second')}
          style={styles.buscar}
         >
            <Text>Ver denuncias</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => navigate('Second')}
          style={styles.denunciar}
         >
            <Text>Denunciar queja</Text>
        </TouchableOpacity>
      </View>
    );
      }
    }
    
    const App = StackNavigator({
        Home: { screen: Main },
        Second: {screen: VerDenuncias},
      });
  
  
export default App;
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#c79274',
  },
  title:{
    alignSelf:'center',
    justifyContent: 'center',
    width: 300,
    height: 150,
  },
  titleText:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  buscar: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 300,
    height:80,
    marginTop: 80,
    borderRadius: 20,
    backgroundColor: "#FFFFFF"
  },
  denunciar: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 300,
    height:80,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF"
  }
});
