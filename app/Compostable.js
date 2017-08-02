import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Compostable extends Component {
  render() {
    return (
      <View style={styles.container}>

      <Image style={styles.title}
          source={require('./Image/CC.jpg')}/>

      <Text style={styles.head}>What you can put in your trash can composter</Text>
      <Text style={styles.list}>1.Fruit and vegetable peels and cores</Text>
      <Text style={styles.list}>2.Leftover cooked veggies (as long as they don't have salt or butter on them)</Text>
      <Text style={styles.list}>3.Produce that's past its prime</Text>
      <Text style={styles.list}>4.Coffee grounds</Text>
      <Text style={styles.list}>5.Tea leaves and tea bags</Text>
      <Text style={styles.list}>6.Egg shells</Text>
      <Text style={styles.list}>7.Shredded newspaper</Text>
      <Text style={styles.list}>8.Weeds, leaves, and spent flowers from the garden</Text>

        
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
