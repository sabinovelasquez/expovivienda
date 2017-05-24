'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

const mainView = require('./views/mainView');

class expovivienda extends Component {
  render() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute= {{
          title: 'Perscan',
          component: mainView,
          navigationBarHidden: true
        }}/>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  },
});

AppRegistry.registerComponent('expovivienda', () => expovivienda);
