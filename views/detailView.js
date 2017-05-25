import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Navigator
} from 'react-native';

class detailView extends Component {

  constructor(props) {
    super(props);
  }

  goBack = (state) => {
    this.props.navigator.popToTop();
  }

  render() {
    const contents = this.props.data.projects.map( (item) => {
      return (
        <View key={item.title} style={ styles.block }>
          <Text style={styles.titles}>{item.title}</Text>
          <Text style={styles.dealers}>{item.dealer}</Text>
          <Text style={styles.standar}>DISPONIBILIDAD:</Text>
          <Text style={styles.types}>{item.type}</Text>
          <Text style={styles.standar}>DIRECCIÓN:</Text>
          <Text style={styles.addresses}>{item.address}</Text>
        </View>
      );
    });
    return (
      <Image source={require('../assets/bgIn.png')} style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/gob.png')} style={styles.gob} />
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.headerTxt}>DESCUBRE LAS MEJORES OPORTUNIDADES PARA COMPRAR UNA VIVIENDA DE HASTA 2.200 UF, EN LOS PROYECTOS REGULADOS POR EL PROGRAMA DE INTEGRACIÓN SOCIAL Y TERRITORIAL (DS 19).</Text>
        </View>
        <View style={styles.content}>
          <Image source={require('../assets/sello.png')} style={styles.sello} />
          <Text style={styles.title}>PROYECTOS PARA
            <Text style={styles.red}> {this.props.data.title}</Text>
          </Text>
          <View style={styles.blocks}>
            {contents}
          </View>
        </View>
        <View style={styles.bottomBtn}>
          <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.btns}>
            <Text style={styles.btntext}>OTRAS COMUNAS</Text>
          </TouchableOpacity>
        </View>
      </Image>
    );
    ///Render ends...
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
  gob: {
    width: 66,
    height: 64,
    resizeMode: 'contain',
    position: 'absolute',
    left: 10,
    top: 20,
    borderWidth: .5,
    borderColor: '#fff'
  },
  sello: {
    width: 112,
    height: 112,
    resizeMode: 'contain',
    position: 'absolute',
    right: 10,
    top: -35,
    opacity: .5
  },
  red: {
    color: '#DD4934'
  },
  blocks: {
    marginLeft: '2%',
    width: '96%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  block: {
    marginLeft: '2%',
    marginRight: '2%',
    width: '45%',
    height: 145,
    borderBottomWidth: 1,
    borderBottomColor: '#BABABA'
  },
  titles: {
    marginTop: 10,
    fontFamily: 'BlissPro-Heavy',
    fontSize: 16,
    color: '#292929'
  },
  standar: {
    fontFamily: 'BlissPro-Heavy',
    marginTop: 5,
    fontWeight: '100',
    fontSize: 14,
    color: '#292929'
  },
  dealers: {
    fontFamily: 'BlissPro-Heavy',
    fontWeight: '100',
    fontSize: 14,
    color: '#292929'
  },
  addresses: {
    fontFamily: 'BlissPro-Heavy',
    fontSize: 14,
    color: '#DD4934'
  },
  types: {
    fontFamily: 'BlissPro-Heavy',
    fontSize: 14,
    color: '#DD4934'
  },
  title: {
    fontFamily: 'BlissPro-Heavy',
    textAlign: 'center',
    fontSize: 24,
    color: '#3E6797',
    marginBottom: 20
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
  },
  bottomBtn: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    width: '100%'
  }
});
module.exports = detailView;
