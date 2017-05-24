import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Navigator,
  Image,
  View,
} from 'react-native';
//require('../assets/bg.png')
const detailView = require('./detailView');

class mainView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comuna: 'MAIPÚ'
    }
  }

  detail() {
    this.props.navigator.push({
      title: 'detailView',
      component: detailView,
      navigationBarHidden: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.vn}>{this.state.comuna}</Text>
        <TouchableOpacity onPress={this.detail.bind(this)} style={styles.mainBtn}>
          <Text>Detalle</Text>
        </TouchableOpacity>
        <Image style={styles.bg} source={require('../assets/bg.png')}/>
      </View>
      ///Render ends...
    );
  }
};

const styles = StyleSheet.create({
  vn:{
    width: Dimensions.get('window').width,
    textAlign: 'center',
    color: '#858585'
  },
  bg:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    resizeMode: 'contain',
    zIndex: 1
  },
  container:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
module.exports = mainView;
