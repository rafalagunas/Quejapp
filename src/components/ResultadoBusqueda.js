import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Alert,
  ListView,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from '../index';

 
class ResultadoBusqueda extends Component {
  static navigationOptions = {
    title: 'Todas las denuncias',
  };
constructor(props) {
  super(props);
  this.state = {
    isLoading: true
  }
}
 
GetItem (queja_queja) {
 
Alert.alert("",queja_queja);
 
}
 
 
componentDidMount() {
 
    const {state} = this.props.navigation;
    var datos = state.params ? state.params.datos : "<undefined>";

  return datos
   .then((returned) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(returned),
      }, function() {
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
 
ListViewItemSeparator = () => {
  return (
    <View
      style={{
 
        height: 5,
        width: "100%",
        backgroundColor: "#fff",
 
      }}
    />
  );
}
 
 
render() {
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }
 
  return (
 
    <View style={styles.MainContainer}>
 
      <ListView
 
        dataSource={this.state.dataSource}
 
        renderSeparator= {this.ListViewItemSeparator}
 
        renderRow={(rowData) =>
 
       <View style={{flex:1, flexDirection: 'column'}} >
 
         <TouchableOpacity style={styles.contenedor_queja} onPress={this.GetItem.bind(this, rowData.queja_queja)} >
       
         <Text style={styles.textViewContainer} >{'Estado: ' + rowData.queja_estado}</Text>
 
         <Text style={styles.textViewContainer} >{'Ciudad: ' + rowData.queja_ciudad}</Text>
 
         <Text style={styles.textViewContainer} >{'Dependencia: ' + rowData.queja_dependencia}</Text>
 
         <Text style={styles.textViewContainer} >{'Area de dependencia: ' + rowData.queja_area}</Text>

         <Text style={styles.textViewContainer} >{'Fecha: ' + rowData.queja_fecha}</Text>

         <Text style={styles.textViewContainer} >{'Nombre: ' + rowData.queja_nombre}</Text>

         <Text style={styles.textViewContainer} >{'Contacto: ' + rowData.queja_contacto}</Text>

         <Text style={styles.textViewContainer} >{'Queja: ' + rowData.queja_queja}</Text>
 
         </TouchableOpacity>  
 
       </View>
 
        }
      />
 
    </View>
  );
}
}
 
const styles = StyleSheet.create({
 
contenedor_queja: {
 backgroundColor: '#b0713e',
 borderRadius:20
},

MainContainer :{
 
// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,
backgroundColor: '#fff',
padding: 5,
 
},
 
textViewContainer: {
 
 textAlign:'left', 
 padding:5,
 fontSize: 15,
 color: '#000',
 
}
 
});



export default ResultadoBusqueda;