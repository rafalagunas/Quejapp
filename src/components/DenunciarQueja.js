import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Picker,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';


class DenunciarQueja extends React.Component {
    static navigationOptions = {
      title: 'Denunciar Queja',
    };

    constructor(props) {
      super(props);
      this.state = {
        Estado: "Selecciona el estado"
      };
    }  

    render() {
      return (
        <View>
          <View style={styles.picker}>
            <Picker 
            mode="dropdown"


            >

            <Picker.Item label={this.state.Estado} value="ags" />
            <Picker.Item label="Aguascalientes" value="ags" />
            <Picker.Item label="Baja California" value="bc" />
            <Picker.Item label="Baja California Sur" value="bcs" />
            <Picker.Item label="Campeche" value="camp" />
            <Picker.Item label="Chiapas" value="chis" />
                <Picker.Item label="Chihuahua" value="chih" />
                <Picker.Item label="Coahuila" value="coah" />
                <Picker.Item label="Colima" value="col" />
                <Picker.Item label="Ciudad de México" value="cdmx" />
                <Picker.Item label="Durango" value="dgo" />
                <Picker.Item label="Guanajuato" value="gto" />
                <Picker.Item label="Guerrero" value="gro" />
                <Picker.Item label="Hidalgo" value="hgo" />
                <Picker.Item label="Jalisco" value="jal" />
                <Picker.Item label="Michoacán" value="mich" />
                <Picker.Item label="Morelos" value="mor" />
                <Picker.Item label="Nayarit" value="nay" />
                <Picker.Item label="Nuevo León" value="nl" />
                <Picker.Item label="Oaxaca" value="oax" />
                <Picker.Item label="Puebla" value="pue" />
                <Picker.Item label="Querétaro" value="qro" />
                <Picker.Item label="Quintana Roo" value="qr" />
                <Picker.Item label="San Luis Potosí" value="slp" />
                <Picker.Item label="Sinaloa" value="sin" />
                <Picker.Item label="Sonora" value="son" />
                <Picker.Item label="Tabasco" value="tab" />
                <Picker.Item label="Tamaulipas" value="tam" />
                <Picker.Item label="Tlaxcala" value="tlax" />
                <Picker.Item label="Veracruz" value="ver" />
                <Picker.Item label="Yucatán" value="yuc" />
                <Picker.Item label="Zacatecas" value="zac" />
            </Picker>
            </View>

            <View style={styles.picker}>
            <Picker 
            mode="dropdown"
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
      );
    }
  }

const styles = StyleSheet.create({
  picker:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
    });


export default DenunciarQueja;