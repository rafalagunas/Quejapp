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

class BuscarDenuncias extends React.Component {
    static navigationOptions = {
      title: 'Buscar queja ciudadana',
      buttonPrss: false
    };

    constructor(props) {
      super(props);
      this.state = {
        Estado: "",
        Dependencia: "",
        Ciudad:'',
        Area_dependencia:'',
        data:''
      };
      this.fillData = this.fillData.bind(this);
    }  


    
    SelectState = (estado) =>{
      this.setState({ Estado : estado});
    }

    SelectDependence = (dependencia) =>{
      this.setState({ Dependencia : dependencia});
    }
    
    fillData = (datos) => {
      this.props.fillData(datos)
    }
  
    setStateAsync(state) {
      return new Promise((resolve) => {
        this.setState(state, resolve)
      });
    }


  Send(e) {    

      let details = {
        'form': 'quejapp',
        'op': 'get',
       'queja_estado': this.state.Estado,
        'queja_ciudad': '',
        'queja_dependencia': this.state.Dependencia,
    };

    let formBody = [];
    for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

     fetch('http://quejapp.warecrafty.com/API', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
    })

    
    .then((response) => response.json())
    .then(responseJson => this.setState({data: responseJson}))
    //.then(data => { if(data != '' && data != undefined & data != null){this.fillData(data)}})
    

     
};   


    render() {
      const { navigate } = this.props.navigation;
      
      if(this.state.data != ''){
        this.fillData(this.state.data)
        navigate('Resultado')
      }

      return (
        <ScrollView style={{backgroundColor:"#FFF"}}>
          <View style={styles.pickers_container}>
          <View style={styles.picker}>
          
            <Picker 
            
            selectedValue={this.state.Estado}
            onValueChange={this.SelectState}
            >  
            <Picker.Item label="Seleccionar Estado" value="" />
            <Picker.Item label="Aguascalientes" value="Aguascalientes" />
            <Picker.Item label="Baja California" value="Baja California" />
            <Picker.Item label="Baja California Sur" value="Baja California Sur" />
            <Picker.Item label="Campeche" value="Campeche" />
            <Picker.Item label="Chiapas" value="Chiapas" />
                <Picker.Item label="Chihuahua" value="Chihuahua" />
                <Picker.Item label="Coahuila" value="Coahuila" />
                <Picker.Item label="Colima" value="Colima" />
                <Picker.Item label="Ciudad de México" value="Ciudad de Mexico" />
                <Picker.Item label="Durango" value="Durango" />
                <Picker.Item label="Guanajuato" value="Guanajuato" />
                <Picker.Item label="Guerrero" value="Guerrero" />
                <Picker.Item label="Hidalgo" value="Hidalgo" />
                <Picker.Item label="Jalisco" value="Jalisco" />
                <Picker.Item label="Michoacán" value="Michoacan" />
                <Picker.Item label="Morelos" value="Morelos" />
                <Picker.Item label="Nayarit" value="Nayarit" />
                <Picker.Item label="Nuevo León" value="Nuevo Leon" />
                <Picker.Item label="Oaxaca" value="Oaxaca" />
                <Picker.Item label="Puebla" value="Puebla" />
                <Picker.Item label="Querétaro" value="Queretaro" />
                <Picker.Item label="Quintana Roo" value="Quintana Roo" />
                <Picker.Item label="San Luis Potosí" value="San Luis Potosi" />
                <Picker.Item label="Sinaloa" value="Sinaloa" />
                <Picker.Item label="Sonora" value="Sonora" />
                <Picker.Item label="Tabasco" value="Tabasco" />
                <Picker.Item label="Tamaulipas" value="Tamaulipas" />
                <Picker.Item label="Tlaxcala" value="Tlaxcala" />
                <Picker.Item label="Veracruz" value="Veracruz" />
                <Picker.Item label="Yucatán" value="Yucatan" />
                <Picker.Item label="Zacatecas" value="Zacatecas" />
            </Picker>
            
            </View>

            <View style={styles.picker}>
            <Picker 
            selectedValue={this.state.Dependencia}
            onValueChange={this.SelectDependence}
            >
              <Picker.Item label="Seleccionar dependencia" value="" />
              <Picker.Item label="Seguridad Pública" value="sp" />
              <Picker.Item label="SEGOB" value="segob" />
              <Picker.Item label="SRE" value="sre" />
              <Picker.Item label="SHCP" value="shcp" />
              <Picker.Item label="SEMARNAT" value="semarnat" />
              <Picker.Item label="SEP" value="sep" />
              <Picker.Item label="SALUD" value="sal" />
              <Picker.Item label="CULTURA" value="cul" />
              <Picker.Item label="PGR" value="pgr" />
              <Picker.Item label="CJEF" value="cjef" />
              <Picker.Item label="SECTUR" value="sectur" />
              <Picker.Item label="STPS" value="stps" />
            </Picker>
            </View>
          </View>
        

            <TouchableOpacity
            style={styles.botonBuscar}
            onPress={e => this.Send(e)  }
            >
           
              <Text style={styles.texto}> Buscar denuncias</Text>
              </TouchableOpacity>

        </ScrollView>
      );
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        fillData: (data) => { dispatch(search_response(data)); }
    }
}
 
const mapStateToProps = state => {
  //console.log(state)
  return {  
      data: state.data,    
  }
}

const window = Dimensions.get("window");

const styles = StyleSheet.create({
  pickers_container:{
    justifyContent:'center',
    marginTop: window.height * .2
  },
  picker:{
    borderColor: 'black',
    borderWidth: 1,
    width:280,
    alignSelf:'center',
  },

  botonBuscar:{
    width: 300,
    height: 80,
    borderRadius: 80,
    marginTop:20,
    justifyContent:'center',
    alignSelf: 'center',
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

    export default connect(mapStateToProps,mapDispatchToProps)(BuscarDenuncias);