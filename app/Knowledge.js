import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

import General from './General'
import Compostable from './Compostable'
import Recyle from './Recyle'
import Hazardous from './Hazardous'

export default class Knowledge extends Component {

  _General() {
    this.props.navigator.push({
      name: 'General',
      component: General
    });
  }

  _Compostable(){
    this.props.navigator.push({
      name:'Compostable',
      component:Compostable
    });
}
  _Recyle(){
    this.props.navigator.push({
      name:'Recyle',
      component:Recyle
    });
  }
  _Hazardous(){
      this.props.navigator.push({
        name:'Hazardous',
        component:Hazardous

      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Knowledge</Text>
        <TouchableOpacity style={styles.generalBtn} onPress={this._General.bind(this)}>
          <Text style={styles.generalText}>General</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.compostableBtn} onPress={this._Compostable.bind(this)}>
        <Text style={styles.compostableText}>Compostable</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.recycleBtn} onPress={this._Recyle.bind(this)}>
        <Text style={styles.recyleText}>Recyle</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.hazaBtn} onPress={this._Hazardous.bind(this)}>
        <Text style={styles.hazaText}>Hazardous</Text>
        </TouchableOpacity>



      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'orange'
  },
  generalBtn: {
    width: 180,
    height: 30,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'deepskyblue'
  },
  generalText: {
    flex:1,
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  compostableBtn:{
    width: 180,
    height: 30,
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'limegreen'

  },
  compostableText:{
    flex:1,
    color: 'white',
    fontSize: 20,
    textAlign: 'center'

  },
  recycleBtn:{
    width: 180,
    height: 30,
    marginTop: 60,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'gold'


  },
  recyleText:{
    flex:1,
    color: 'white',
    fontSize: 20,
    textAlign: 'center'

  },
  hazaBtn:{
    width: 180,
    height: 30,
    marginTop: 80,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'red'


  },
  hazaText:{
    flex:1,
    color: 'white',
    fontSize: 20,
    textAlign: 'center'

  }
});
