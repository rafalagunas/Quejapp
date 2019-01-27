import React, { Component } from "react";
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
} from "react-native";
import { StackNavigator } from "react-navigation";

class BuscarDenuncias extends React.Component {
  static navigationOptions = {
    title: "Encuentra denuncias",
    buttonPrss: false
  };

  constructor(props) {
    super(props);
    this.state = {
      Estado: "",
      Dependencia: "",
      Ciudad: "",
      Area_dependencia: "",
      data: ""
    };
    this.fillData = this.fillData.bind(this);
  }

  SelectState = estado => {
    this.setState({ Estado: estado });
  };

  SelectDependence = dependencia => {
    this.setState({ Dependencia: dependencia });
  };

  fillData = datos => {
    this.props.fillData(datos);
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  Send(e) {
    let details = {
      queja_estado: this.state.Estado,
      queja_ciudad: "",
      queja_dependencia: this.state.Dependencia
    };

    fetch(
      "http://coderscave.tech/api/state/complaints?estado_id=" +
        parseInt(details.queja_estado),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(response => alert(JSON.stringify(response)));
    // .then(responseJson =>this.setState({ data: responseJson });
    //.then(data => { if(data != '' && data != undefined & data != null){this.fillData(data)}})
  }

  render() {
    const { navigate } = this.props.navigation;

    if (this.state.data != "") {
      this.fillData(this.state.data);
      navigate("Resultado");
    }

    return (
      <ScrollView style={{ backgroundColor: "#FFF" }}>
        <View style={styles.pickers_container}>
          <View style={styles.picker}>
            <Picker
              selectedValue={this.state.Estado}
              onValueChange={this.SelectState}
            >
              <Picker.Item label="Seleccionar Estado" value="" />
              <Picker.Item label="Aguascalientes" value="1" />
              <Picker.Item label="Baja California" value="2" />
              <Picker.Item label="Baja California Sur" value="3" />
              <Picker.Item label="Campeche" value="4" />
              <Picker.Item label="CDMX" value="5" />
              <Picker.Item label="Chiapas" value="6" />
              <Picker.Item label="Chihuahua" value="7" />
              <Picker.Item label="Coahuila" value="8" />
              <Picker.Item label="Colima" value="9" />
              <Picker.Item label="Ciudad de México" value="10" />
              <Picker.Item label="Durango" value="11" />
              <Picker.Item label="Guanajuato" value="12" />
              <Picker.Item label="Guerrero" value="13" />
              <Picker.Item label="Hidalgo" value="14" />
              <Picker.Item label="Jalisco" value="15" />
              <Picker.Item label="Michoacán" value="16" />
              <Picker.Item label="Morelos" value="17" />
              <Picker.Item label="Nayarit" value="18" />
              <Picker.Item label="Nuevo León" value="19" />
              <Picker.Item label="Oaxaca" value="20" />
              <Picker.Item label="Puebla" value="21" />
              <Picker.Item label="Querétaro" value="22" />
              <Picker.Item label="Quintana Roo" value="23" />
              <Picker.Item label="San Luis Potosí" value="24" />
              <Picker.Item label="Sinaloa" value="25" />
              <Picker.Item label="Sonora" value="26" />
              <Picker.Item label="Tabasco" value="27" />
              <Picker.Item label="Tamaulipas" value="28" />
              <Picker.Item label="Tlaxcala" value="29" />
              <Picker.Item label="Veracruz" value="30" />
              <Picker.Item label="Yucatán" value="31" />
              <Picker.Item label="Zacatecas" value="32" />
            </Picker>
          </View>

          <View style={styles.picker}>
            <Picker
              selectedValue={this.state.Dependencia}
              onValueChange={this.SelectDependence}
            >
              <Picker.Item label="Seleccionar dependencia" value="" />
              <Picker.Item label="Seguridad Pública" value="1" />
              <Picker.Item label="Secretaría de Gobierno" value="2" />
              <Picker.Item
                label="Secretaría de Relaciones Exteriores"
                value="3"
              />
              <Picker.Item
                label="Secretaría de Hacienda y Crédito Público"
                value="4"
              />
              <Picker.Item
                label="Secretaría de Medio Ambiente y Recursos Naturales"
                value="5"
              />
              <Picker.Item label="Secretaría de Educación Pública" value="6" />
              <Picker.Item label="Secretaría de Salud" value="7" />
              <Picker.Item label="Secretaría de Cultura" value="8" />
              <Picker.Item
                label="Procuraduría General de la República"
                value="9"
              />
              <Picker.Item
                label="Consejería Jurídica del Ejecutivo Federal"
                value="10"
              />
              <Picker.Item label="Secretaría de Turismo" value="11" />
              <Picker.Item
                label="Secretaría del Trabajo y Previsión Social"
                value="12"
              />
            </Picker>
          </View>
        </View>

        <TouchableOpacity
          style={styles.botonBuscar}
          onPress={e => this.Send(e)}
        >
          <Text style={styles.texto}> Buscar denuncias</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const window = Dimensions.get("window");

const styles = StyleSheet.create({
  pickers_container: {
    justifyContent: "center",
    marginTop: window.height * 0.2
  },
  picker: {
    borderColor: "black",
    borderWidth: 1,
    width: 280,
    alignSelf: "center"
  },

  botonBuscar: {
    width: 300,
    height: 80,
    borderRadius: 80,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#FFF",
    borderWidth: 4,
    borderColor: "#425d8b"
  },

  texto: {
    alignSelf: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 18
  }
});

export default BuscarDenuncias;
