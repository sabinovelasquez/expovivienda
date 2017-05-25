import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
  Navigator,
  Image,
  View,
} from 'react-native';

const data = require('../data.json');

const detailView = require('./detailView');

class mainView extends Component {

  constructor(props) {
    super(props);
  }

  detail(info) {
    this.props.navigator.push({
      title: 'detailView',
      component: detailView,
      navigationBarHidden: true,
      passProps: {
        data: info
      }
    });
  }

  render() {
    const projects = data;
    return (
      <Image source={require('../assets/bg.png')} style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.headerTxt}>DESCUBRE LAS MEJORES OPORTUNIDADES PARA COMPRAR UNA VIVIENDA DE HASTA 2.200 UF, EN LOS PROYECTOS REGULADOS POR EL PROGRAMA DE INTEGRACIÓN SOCIAL Y TERRITORIAL (DS 19).</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>SELECCIONA COMUNA</Text>
          <View style={styles.btnsContent}>
            <TouchableOpacity onPress={this.detail.bind(this, projects[0])} style={styles.btns}>
              <Text style={styles.btntext}>{projects[0].title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.detail.bind(this, projects[1])} style={styles.btns}>
              <Text style={styles.btntext}>{projects[1].title}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnsContent}>
            <TouchableOpacity onPress={this.detail.bind(this, projects[2])} style={styles.btns}>
              <Text style={styles.btntext}>{projects[2].title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.detail.bind(this, projects[3])} style={styles.btns}>
              <Text style={styles.btntext}>{projects[3].title}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnsContent}>
            <TouchableOpacity onPress={this.detail.bind(this, projects[4])} style={styles.btns}>
              <Text style={styles.btntext}>{projects[4].title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.detail.bind(this, projects[5])} style={styles.btns}>
              <Text style={styles.btntext}>{projects[5].title}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnsContent}>
            <TouchableOpacity onPress={this.detail.bind(this, projects[6])} style={styles.btns}>
              <Text style={styles.btntext}>{projects[6].title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.detail.bind(this, projects[7])} style={styles.btns}>
              <Text style={styles.btntext}>{projects[7].title}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnsContent}>
            <TouchableOpacity onPress={this.detail.bind(this, projects[8])} style={styles.btns}>
              <Text style={styles.btntext}>{projects[8].title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.detail.bind(this, projects[9])} style={styles.btns}>
              <Text style={styles.btntext}>{projects[9].title}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnsContent}>
            <TouchableOpacity onPress={this.detail.bind(this, projects[10])} style={styles.btns}>
              <Text style={styles.btntext}>{projects[10].title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.detail.bind(this, projects[11])} style={styles.btns}>
              <Text style={styles.btntext}>{projects[11].title}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Image>
      ///Render ends...
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null
  },
  content: {
    backgroundColor: 'transparent'
  },
  btnsContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 45
  },
  title: {
    fontFamily: 'BlissPro-Heavy',
    textAlign: 'center',
    fontSize: 24,
    color: '#3E6797',
    marginBottom: 48
  },
  header: {
    backgroundColor: '#3E6797',
    height: 225,
    marginBottom: 48,
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 190
  },
  headerTxt: {
    fontFamily: 'BlissPro-Heavy',
    fontWeight: '100',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    marginLeft: 52,
    marginRight: 52
  },
  btns: {
    height: 55,
    width: 200,
    marginLeft: 70,
    marginRight: 70,
    backgroundColor: '#3E6797',
    borderBottomColor: '#184C88',
    borderBottomWidth: 5
  },
  btntext: {
    marginTop: 14,
    fontFamily: 'BlissPro-Heavy',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  }
});
module.exports = mainView;
