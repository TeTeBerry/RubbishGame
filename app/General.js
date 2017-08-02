import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class General extends Component {
  render() {
    return (
      <View style={styles.container}>

      <Image style={styles.title}
          source={require('./Image/GG.jpg')}/>

      <Text style={styles.head}>What you can put in your general waste bin</Text>
      <Text style={styles.list}>1.Food waste and scraps</Text>
      <Text style={styles.list}>2.Nappies</Text>
      <Text style={styles.list}>3.Polystyrene</Text>
      <Text style={styles.list}>4.Plastic pakaging,food wrappers</Text>
      <Text style={styles.list}>5.and cling film</Text>
      <Text style={styles.list}>6.Plastic bags and household garbage</Text>

        
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
    textAlign:'auto',
    fontStyle:'italic'
  },
  list:{
    fontSize:20,
    color:'grey',
    textAlign:'left'

  },
  title:{
    width:350,
    height:100,
    paddingTop:20,
    borderRadius:8,
  }
});
