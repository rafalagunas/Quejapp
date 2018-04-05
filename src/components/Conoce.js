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
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import App from '../index';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { search_response } from '../Actions/Search';
import reducer from '../reducers/BusquedaReducer';

class Conoce extends React.Component {
    static navigationOptions = {
      title: 'Encuentra denuncias',
      buttonPrss: false
    };

    constructor(props) {
      super(props);
      this.state = {
        First: "",
        Second: "",
        Third:'',
        Fourth:'',
        fifth:'',
        response: ''
      };
    }  


    
    selectFirst = (first) =>{
      this.setState({ First : first});
    }

    selectSecond = (second) =>{
        this.setState({ Second : second});
    }

    selectThird = (third) =>{
        this.setState({ Third : third});
    }

    selectFourth = (fourth) =>{
        this.setState({ Fourth : fourth});
    }

    selectFifth = (fifth) =>{
        this.setState({ Fifth : fifth});
    }


    SelectDependence = (dependencia) =>{
      this.setState({ Dependencia : dependencia});
    }
    
 
  
    setStateAsync(state) {
      return new Promise((resolve) => {
        this.setState(state, resolve)
      });
    }


  Analyze(e) {    
    

     
};   


    render() {
      return (
        <ScrollView style={{backgroundColor:"#FFF"}}>
          
          <Text style={{ fontSize: 18, color: "#000"}}> Servidor Público: una persona que presta sus servicios al estado</Text>

          <View style={styles.pickers_container}>
         
          <View style={styles.picker}>

            <Text style={{ fontSize: 18}}> ¿Es un servidor público?</Text>
            <Picker 
            
            selectedValue={this.state.First}
            onValueChange={this.selectFirst}
            >  
            <Picker.Item label="Selecciona la respuesta" value="" />
            <Picker.Item label="si" value="si" />
            <Picker.Item label="no" value="no" />
            </Picker>
            
            </View>


      <View style={styles.picker}>
      
      <Text style={{ fontSize: 18}}> ¿Hizo uso de la fuerza pública para evitar que se cumpliera una ley?</Text>
          <Picker 
          selectedValue={this.state.Second}
          onValueChange={this.selectSecond}
          >  
          <Picker.Item label="Selecciona la respuesta" value="" />
          <Picker.Item label="si" value="si" />
          <Picker.Item label="no" value="no" />
          </Picker>
          </View>



      <View style={styles.picker}>
      
      <Text style={{ fontSize: 18}}> ¿Te insultó, hirió o amenazó mientras hacía uso de su puesto?</Text>
          <Picker 
          selectedValue={this.state.Third}
          onValueChange={this.selectThird}
          >  
          <Picker.Item label="Selecciona la respuesta" value="" />
          <Picker.Item label="si" value="si" />
          <Picker.Item label="no" value="no" />
          </Picker>
          </View>


          <View style={styles.picker}>
          
          <Text style={{ fontSize: 18}}> ¿Se te negó algún servicio injustificadamente?</Text>
          <Picker 
          selectedValue={this.state.Fourth}
          onValueChange={this.selectFourth}
          >  
          <Picker.Item label="Selecciona la respuesta" value="" />
          <Picker.Item label="si" value="si" />
          <Picker.Item label="no" value="no" />
          </Picker>
          </View>

      <View style={styles.picker}>
      
      <Text style={{ fontSize: 18}}> ¿Se apropio de recursos destinados a otros?</Text>
          <Picker 
          selectedValue={this.state.Fifth}
          onValueChange={this.selectFifth}
          >  
          <Picker.Item label="Selecciona la respuesta" value="" />
          <Picker.Item label="si" value="si" />
          <Picker.Item label="no" value="no" />
          </Picker>
          </View>

          </View>
        

            <Text
            style={styles.Resultado}
            >
           
              <Text style={styles.texto}> Buscar denuncias</Text>
              </Text>

        </ScrollView>
      );
    }
  }



const window = Dimensions.get("window");

const styles = StyleSheet.create({
  pickers_container:{
    justifyContent:'center',
    marginTop: window.height * .1
  },
  picker:{
    borderColor: 'black',
    borderWidth: 1,
    width:window.width * .7,
    alignSelf:'center',
  },

  Resultado:{
    width: window.width * .7,
    height: window.width * .2,
    marginTop:20,
    justifyContent:'center',
    alignSelf: 'center',
    alignItems:'center',
    backgroundColor: '#FFF',
    borderWidth: 4,
    borderColor:'#425d8b'
  },

  texto:{
    alignSelf: 'center',
    color:'#000',
    fontWeight:'bold',
    fontSize:18
  }
    });

    export default Conoce;