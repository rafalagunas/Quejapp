import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Alert,
  ListView,
  TouchableOpacity,
  View,
  ActivityIndicator
} from "react-native";
import { StackNavigator } from "react-navigation";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { search_response } from "../Actions/Search";
import reducer from "../reducers/BusquedaReducer";

class ResultadoBusqueda extends Component {
  static navigationOptions = {
    title: "Busqueda"
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: ""
    };
    this.fillData = this.fillData.bind(this);
  }

  GetItem(queja_queja) {
    Alert.alert("", queja_queja);
  }
  fillData = datos => {
    this.props.fillData(datos);
  };
  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }
  componentDidMount() {
    return fetch(
      "http://coderscave.tech/quejapp/api/v1/state/complaints?estado_id=" +
        parseInt(this.props.data)
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson == "") {
          Alert.alert("", "No ha habido resultados");
          const { navigate } = this.props.navigation;
          const empty = "";
          this.fillData(empty);
          navigate("Buscar");
        } else {
          let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          });
          this.setState(
            {
              isLoading: false,
              dataSource: ds.cloneWithRows(responseJson)
            },
            function() {}
          );
        }
      })
      .catch(error => {
        alert(error);
      });
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "100%",
          backgroundColor: "#fff"
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderSeparator={this.ListViewItemSeparator}
          renderRow={rowData => (
            <View style={{ flex: 1, flexDirection: "column" }}>
              <TouchableOpacity style={styles.contenedor_queja}>
                <Text style={styles.textViewContainer}>
                  {"Ciudad: " + rowData.city}
                </Text>

                <Text style={styles.textViewContainer}>
                  {"Dependencia: " + rowData.dependency}
                </Text>

                <Text style={styles.textViewContainer}>
                  {"Area de dependencia: " + rowData.dependency_area}
                </Text>

                <Text style={styles.textViewContainer_queja}>
                  {"Queja: " + rowData.complaint}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fillData: data => {
      dispatch(search_response(data));
    }
  };
};

const mapStateToProps = state => {
  return {
    data: state.busqueda.data
  };
};

const styles = StyleSheet.create({
  contenedor_queja: {
    backgroundColor: "#FFF",
    borderRadius: 13,
    height: 210,
    borderWidth: 4,
    borderColor: "#425d8b"
  },

  MainContainer: {
    // Setting up View inside content in Vertically center.
    justifyContent: "center",
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: "#fff",
    padding: 5
  },

  textViewContainer: {
    textAlign: "left",
    padding: 1,
    fontSize: 15,
    color: "#000",
    fontWeight: "bold"
  },

  textViewContainer_queja: {
    textAlign: "left",
    padding: 1,
    fontSize: 15,
    color: "#d60404",
    fontWeight: "bold"
  }
});
export default connect(mapStateToProps)(ResultadoBusqueda);
