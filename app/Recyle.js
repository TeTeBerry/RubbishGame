import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Recyle extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.title}
          source={require('./Image/RR.jpg')}/>

      <Text style={styles.head}>What you can put in your recyle bin</Text>
      <Text style={styles.list}>1.Aerosols</Text>
      <Text style={styles.list}>2.Aluminium foil</Text>
      <Text style={styles.list}>3.Cans and tins</Text>
      <Text style={styles.list}>4.Cardboard</Text>
      <Text style={styles.list}>5.Cartons - paper based i.e. milk, juice</Text>
      <Text style={styles.list}>6.Glass - bottles and jars</Text>
      <Text style={styles.list}>7.Lids - plastic and metal.</Text>

        
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
