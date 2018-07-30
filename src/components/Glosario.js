import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Picker,
  View,
  Alert,
  Dimensions,
  TouchableOpacity, 
  TextInput
} from 'react-native';

class Glosario extends React.Component {
    static navigationOptions = {
      title: 'Glosario ',
      buttonPrss: false
    };

    constructor(props) {
      super(props);
      this.state = {
     
      };
    }  


   


    render() {
      return (
        <ScrollView style={{backgroundColor:"#FFF"}}>
          
          <View style={styles.MainView}>
          <Text style={styles.bold}>Servidor Público: </Text> 
          <Text style={styles.simple_text} >Una persona que presta sus servicios al estado</Text>
       

    <Text style={styles.bold}>Soborno:  </Text>
    <Text style={styles.simple_text} >
    Soborno se le conoce a la acción cuando una persona usa algún bien 
    económico para asegurar alguna ventaja o para que la persona se haga de la vista gorda
    </Text>


          <Text style={styles.bold}>Desvío de recursos </Text>
          <Text style={styles.simple_text} >
      Se le conoce cuando algún estímulo económico destinado a una obra o inversión pública es usada para algún sector privado o sobornos.
       </Text>
       <Text style={styles.bold}>Abuso de funciones</Text>
       <Text style={styles.simple_text} >
        Cuando algún funcionario en este caso público abusa de su poder para ventanas económicas o personales
        </Text>
        </View>
         
        </ScrollView>
      );
    }
  }



const window = Dimensions.get("window");

const styles = StyleSheet.create({

  MainView:{
    paddingLeft: 30,
    paddingTop: 30
  },
  bold:{
    fontSize: 18, 
    color: '#000',
    fontWeight: 'bold'
  },
  simple_text:{
    fontSize: 18, 
    color: '#000',paddingBottom: 10
  },

    });

    export default Glosario;