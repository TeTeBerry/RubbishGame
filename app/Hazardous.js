import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Hazardous extends Component {
  render() {
    return (
      <View style={styles.container}>

      <Image style={styles.title}
          source={require('./Image/CC.jpg')}/>

      <Text style={styles.head}>What you can put in your hazardous bin</Text>
      <Text style={styles.list}>1.Solvent-based paints</Text>
      <Text style={styles.list}>2.Pesticides and other garden chemicals</Text>
      <Text style={styles.list}>3..Batteries (for example car, mobile phone or regular household batteries)</Text>
      <Text style={styles.list}>4.Motor oils (for example from cars or mowers)</Text>
      <Text style={styles.list}>5.Petrol and kerosene</Text>
      <Text style={styles.list}>6.Cleaning and polishing chemicals</Text> 
      <Text style={styles.list}>7.Swimming pool or spa bath chemicals</Text>
      <Text style={styles.list}>8.Pharmaceuticals (all medicines)</Text>
      <Text style={styles.list}>9.Obsolete computer equipment
      </Text>
      <Text style={styles.list}>10.Thermometers, barometers, thermostats, fluorescent tubes and compact fluorescent globes (CFLs).
      </Text>

        
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
  head: {
    fontSize: 25,
    color: 'darkgrey',
    textAlign:'center',
    fontStyle:'italic'
  },
  list:{
    fontSize:20,
    color:'grey',
    textAlign:'center'

  },
  title:{
    width:350,
    height:100,
    paddingTop:20,
    borderRadius:8,
  }
});
