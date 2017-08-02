import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert

} from 'react-native';


export default class Nail extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Image style={styles.nail}
          source={require('./Image/nail.png')}/>

        <View style={styles.firstline}>
        <View style={styles.firstview}>
        <TouchableHighlight style={styles.generalBtn} onPress={
        ()=> {
            Alert.alert(
                `Sorry!`,
                'Wrong Answer！',
                [
              
                    {text: 'Try agian', onPress: () => console.log('OK Pressed')},
                ]
            )
        }
      }>
   
         <Text style={styles.generalText}>General</Text>
    </TouchableHighlight>  
    </View>

      <View style={styles.firstview}>
      <TouchableHighlight style={styles.compostableBtn} onPress={
        ()=> {
            Alert.alert(
                `Sorry!`,
                'Wrong Answer！',
                [
              
                    {text: 'Try agian', onPress: () => console.log('OK Pressed')},
                ]
            )
        }
      }>
   
         <Text style={styles.compostableText}>Compostable</Text>
    </TouchableHighlight>  
    </View>

    <View style={styles.firstview}>
    <TouchableHighlight style={styles.recyleBtn} onPress={
        ()=> {
            Alert.alert(
                `Congradulations!`,
                'You are right！',
                [
              
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]
            )
        }
      }>
   
         <Text style={styles.recyleText}>Recyle</Text>
    </TouchableHighlight>  
    </View>

     <View style={styles.firstview}>
    <TouchableHighlight style={styles.hazardousBtn} onPress={
        ()=> {
            Alert.alert(
                `Sorry!`,
                'Wrong Answer！',
                [
    
                    {text: 'Try agian', onPress: () => console.log('OK Pressed')},
                ]
            )
        }
      }>
   
         <Text style={styles.hazardousText}>Hazardous</Text>
    </TouchableHighlight>  
    </View>
    </View>
    <Image style={styles.R}
          source={require('./Image/R.jpg')}/>  
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
  nail:{
    width:70,
    height:70,
    borderRadius:5,
    marginTop:20,
  
},
generalBtn: {
    width: 80,
    height: 30,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'deepskyblue'
    
  },
  generalText: {
    flex:1,
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },
  compostableBtn:{
    width: 100,
    height: 30,
    margin: 20,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'limegreen'
    
  },
  compostableText:{
    flex:1,
    color: 'white',
    fontSize: 15,
    textAlign: 'center'

  },
  recyleBtn:{
    width: 80,
    height: 30,
    margin: 20,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'gold'
    
  },
  recyleText:{
    flex:1,
    color: 'white',
    fontSize: 15,
    textAlign: 'center'

  },
  hazardousBtn:{
    width: 80,
    height: 30,
    margin:20,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'red'
    
  },
  hazardousText:{
    flex:1,
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },
  firstline:{
    paddingTop:15,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  firstview:{
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:15,
    alignSelf:'center',
  },H:{
    width:250,
    height:200,
    borderRadius:5,
    paddingBottom:15,
  }
});
