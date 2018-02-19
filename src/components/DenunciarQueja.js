import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Picker,
  View,
  Alert,
  TouchableOpacity, 
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import App from '../index';

class DenunciarQueja extends React.Component {
    static navigationOptions = {
      title: 'Denunciar Queja',
    };

    constructor(props) {
      super(props);
      this.state = {
        Estado: "",
        Dependencia: "",
        Ciudad:'',
        Area_dependencia:'',
        Nombre:'',
        Contacto: '',
        Queja:'',
        key: ''
      };
    }  


    
    SelectState = (estado) =>{
      this.setState({ Estado : estado});
    }

    SelectDependence = (dependencia) =>{
      this.setState({ Dependencia : dependencia});
    }
    
    
  
    Send() {    

      let details = {
        'form': 'quejapp',
        'op': 'add',
        'queja_estado': this.state.Estado,
        'queja_ciudad': this.state.Ciudad,
        'queja_dependencia': this.state.Dependencia,
        'queja_area': this.state.Area_dependencia,
        'queja_nombre': this.state.Nombre,
        'queja_contacto': this.state.Contacto,
        'queja_queja': this.state.Queja
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
    .then(response => { return response.text();})
   .then(responseData => {console.log(responseData); return responseData;})
   .then(data => { if(data != '' && data != undefined & data != null){Alert.alert('Éxito.',"Por seguridad, te asignamos un número de queja único con el cual podrás editar tu queja en cualquier momento. \n\n Tu número de queja es: \n" + data)}})
    
   
};   


    render() {
      const { navigate } = this.props.navigation;
      
      return (
        <ScrollView style={styles.container}>
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

            <TextInput
            style={styles.inputs}
            placeholder="Ciudad"
            onChangeText={(text) => this.setState({Ciudad: text})}

          />
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
          
        

         <TextInput
            style={styles.inputs}
           placeholder="ej. Seguridad pública: tránsito"
            onChangeText={(text) => this.setState({Area_dependencia: text})}
          />


          <TextInput
            style={styles.inputs}
            onChangeText={(text) => this.setState({Nombre: text})}
            placeholder="Tu nombre (Opcional)"
          />
          
          
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => this.setState({Contacto: text})}
            placeholder="correo o número de contacto (Opcional)"
          />

          <TextInput
          style={styles.inputs}
          onChangeText={(text) => this.setState({Queja: text})}
          multiline={true}
          placeholder="Aquí va tu queja"
          >

          </TextInput>  
          

            <TouchableOpacity
            style={styles.botonQueja}
            onPress={() => navigate('Home') && this.Send() }
            >
           
              <Text style={styles.texto}> Publicar queja</Text>
              </TouchableOpacity>

        </ScrollView>
      );
    }
  }




const styles = StyleSheet.create({
  container:{
    flex:1
  },

  picker:{
    borderColor: 'black',
    borderWidth: 1,
    width:280,
    alignSelf:'center'
  },
  inputs:{
    height: 100, 
    borderColor: 'black', 
    borderWidth: 0,
    alignSelf:'center',
    justifyContent:'center',
    width: 280,
    height:70
  },

  botonQueja:{
    width: 300,
    height: 50,
    borderRadius: 25,
    marginTop:15,
    
    justifyContent:'center',
    alignSelf: 'center',
    backgroundColor: '#425d8b'
  },

  texto:{
    alignSelf: 'center',
    color:'#FFF'
  }
    });


export default DenunciarQueja;