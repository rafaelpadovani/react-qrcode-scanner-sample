/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
Platform,
AppRegistry,
StyleSheet,
View,
Linking,
Vibration,
Dimensions,
TouchableOpacity,
} from 'react-native';
import { Container, Header, Content, Button, Text, Body } from 'native-base';

import Camera from 'react-native-camera';

import QRCode from './src/containers/QRCodeReader/QRCodeReader';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{

  state = {
    scanning: false,
    cameraType: Camera.constants.Type.back
  }


  scanClickHandler = () => {
    this.setState({scanning: true});
  };


  render() {

    const state2 = (
      <View  style={styles.container}>
          <Text style={styles.welcome}>
          Barcode Scanner
          </Text>
          <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          </Text>
          <View style={styles.button}>
            <Button onPress={this.scanClickHandler} primary><Text> Scan QRCode </Text></Button>
          </View>
      </View>
    );

    const state3 = (
      <QRCode />
    );

    return (
      <Container>
          {this.state.scanning ? state3 : state2}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
camera: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
},
welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
},
instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
},
button: {
  flexDirection: "row", 
  justifyContent: "center"
}
});

AppRegistry.registerComponent('default', () => App);
