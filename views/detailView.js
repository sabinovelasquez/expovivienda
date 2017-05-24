import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
  CameraRoll,
  Animated,
  Easing,
  Alert,
  Navigator
} from 'react-native';

class detailView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      beginX: 0,
      endX: 0
    }
  }

  // componentDidMount () {

  // }

  goBack = (state) => {
    this.setState({
      title: null,
      subtitle: null
    });
    if(state=='back') {
      this.props.navigator.pop({ screen: 'mainView' });
    }else {
      this.props.navigator.popToTop();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>DETALLE</Text>
        <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.mainBtn}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
    ///Render ends...
  }
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#222222',
    alignItems: 'center',
  }
});
module.exports = detailView;
