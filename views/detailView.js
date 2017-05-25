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
    return (
      <View style={styles.container}>
        <Text>{this.props.data.projects[0].title}</Text>
        <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.mainBtn}>
          <Text>BACK</Text>
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
