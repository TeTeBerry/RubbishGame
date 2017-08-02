import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  NavigatorIOS,
  AlertIOS
} from 'react-native';

import Apple from './Apple'
import Battery from './Battery'
import Bottle from './Bottle'
import French from './French'
import Light from './Light'
import Clothes from './Clothes'
import Chemistry from './Chemistry'
import Nail from './Nail'
import Plastic from './Plastic'
import Chart from './Chart'
import Lips from './Lips'
import Carrot from './Carrot'
import Tis from './Tis'
import Grape from './Grape'
import Starbar from './Starbar'
import Beef from './Beef'
import Box from './Box'
import Medic from './Medic'
import Straw from './Straw'
import Paper from './Paper'
import Boxb from './Boxb'
import Chicken from './Chicken'



export default class Start extends Component {

   _Apple() {
    this.props.navigator.push({
      name: 'Apple',
      component: Apple
    });
  }

  _Battery(){
    this.props.navigator.push({
      name: 'Battery',
      component: Battery
    });
  }

  _Bottle(){
    this.props.navigator.push({
      name: 'Bottle',
      component: Bottle
    });
  }


  _French(){
      this.props.navigator.push({
        name:'French',
        component:French

      });
    }
   _Light() {
    this.props.navigator.push({
      name: 'Light',
      component: Light
    });
  }


  _Clothes(){
    this.props.navigator.push({
      name:'Clothes',
      component:Clothes
    });
  }

   _Chemistry(){
    this.props.navigator.push({
      name:'Chemistry',
      component:Chemistry
    });
  }
    _Nail(){
    this.props.navigator.push({
      name:'Nail',
      component:Nail
    });
}
  _Plastic(){
    this.props.navigator.push({
      name:'Plastic',
      component:Plastic
    });
  }

  _Chart(){
    this.props.navigator.push({
      name:'Chart',
      component:Chart
    });
  }

  _Lips(){
    this.props.navigator.push({
      name:'Lips',
      component:Lips
    });
  }

  _Carrot(){
    this.props.navigator.push({
      name:'Carrot',
      component:Carrot
    });
  }

  _Tis(){
    this.props.navigator.push({
      name:'Tis',
      component:Tis
    });
  }

  _Grape(){
    this.props.navigator.push({
      name:'Grape',
      component:Grape
    });
  }

  _Starbar(){
    this.props.navigator.push({
      name:'Starbar',
      component:Starbar
    });
  }

  _Beef(){
    this.props.navigator.push({
      name:'Beef',
      component:Beef
    });
  }

  _Box(){
    this.props.navigator.push({
      name:'Box',
      component:Box
    });
  }

  _Medic(){
    this.props.navigator.push({
      name:'Medic',
      component:Medic
    });
  }

  _Straw(){
    this.props.navigator.push({
      name:'Straw',
      component:Straw
    });
  }

  _Paper(){
    this.props.navigator.push({
      name:'Paper',
      component:Paper
    });
  }

  _Boxb(){
    this.props.navigator.push({
      name:'Boxb',
      component:Boxb
    });
  }
  
  _Chicken(){
    this.props.navigator.push({
      name:'Chicken',
      component:Chicken
    });
  }

  
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.firstline}>  

        <View style={styles.firstview}>     

        <TouchableOpacity onPress={this._Apple.bind(this)}>
          <Image 
          source={require('./Image/apple.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>

        <View style={styles.firstview}>     
        <TouchableOpacity  onPress={this._Battery.bind(this)}>
          <Image 
          source={require('./Image/battery.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>

         <View style={styles.firstview}>     
         <TouchableOpacity onPress={this._Bottle.bind(this)}>
          <Image 
          source={require('./Image/bottle.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>
        </View>

        <View style={styles.secondline}>  

        <View style={styles.secondview}>   
        <TouchableOpacity onPress={this._Clothes.bind(this)}>
          <Image 
          source={require('./Image/clothes.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>

        <View style={styles.secondview}>     
        <TouchableOpacity  onPress={this._French.bind(this)}>
          <Image 
          source={require('./Image/french.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>

         <View style={styles.secondview}>     
         <TouchableOpacity onPress={this._Light.bind(this)}>
          <Image 
          source={require('./Image/light.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>
        </View>

        <View style={styles.thirdline}>  

        <View style={styles.thirdview}>   
        <TouchableOpacity onPress={this._Chemistry.bind(this)}>
          <Image 
          source={require('./Image/chemistry.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>

        <View style={styles.thirdview}>     
        <TouchableOpacity  onPress={this._Nail.bind(this)}>
          <Image 
          source={require('./Image/nail.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>

         <View style={styles.thirdview}>     
         <TouchableOpacity onPress={this._Plastic.bind(this)}>
          <Image 
          source={require('./Image/plastic.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>
        </View>

        <View style={styles.fourline}>  

        <View style={styles.fourview}>   
        <TouchableOpacity onPress={this._Lips.bind(this)}>
          <Image 
          source={require('./Image/lips.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>

        <View style={styles.fourview}>     
        <TouchableOpacity  onPress={this._Carrot.bind(this)}>
          <Image 
          source={require('./Image/carrot.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>

         <View style={styles.fourview}>     
         <TouchableOpacity onPress={this._Tis.bind(this)}>
          <Image 
          source={require('./Image/tis.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>
        </View>

        <View style={styles.fifthline}>  

        <View style={styles.fifthview}>   
        <TouchableOpacity onPress={this._Grape.bind(this)}>
          <Image 
          source={require('./Image/grape.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>

        <View style={styles.fifthview}>     
        <TouchableOpacity  onPress={this._Starbar.bind(this)}>
          <Image 
          source={require('./Image/starbar.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>

         <View style={styles.fifthview}>     
         <TouchableOpacity onPress={this._Beef.bind(this)}>
          <Image 
          source={require('./Image/beef.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>
        </View>

        <View style={styles.sixline}>  

        <View style={styles.sixview}>   
        <TouchableOpacity onPress={this._Box.bind(this)}>
          <Image 
          source={require('./Image/box.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>

        <View style={styles.sixview}>     
        <TouchableOpacity  onPress={this._Medic.bind(this)}>
          <Image 
          source={require('./Image/medic.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>

         <View style={styles.sixview}>     
         <TouchableOpacity onPress={this._Straw.bind(this)}>
          <Image 
          source={require('./Image/straw.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>
        </View>

        <View style={styles.sevenline}>  

        <View style={styles.sevenview}>   
        <TouchableOpacity onPress={this._Paper.bind(this)}>
          <Image 
          source={require('./Image/paper.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>

        <View style={styles.sevenview}>     
        <TouchableOpacity  onPress={this._Boxb.bind(this)}>
          <Image 
          source={require('./Image/boxb.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>

         <View style={styles.sevenview}>     
         <TouchableOpacity onPress={this._Chicken.bind(this)}>
          <Image 
          source={require('./Image/chicken.png')} style={{alignSelf:'center',width:50, height:50,borderRadius:5,margin:2}}/>
        </TouchableOpacity>
        </View>
        </View>

          <TouchableOpacity style={styles.chartBtn} onPress={this._Chart.bind(this)}>
          <Text style={styles.chartText}>Statistics</Text>
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
  
  firstline:{
    paddingTop:4,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  firstview:{
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:4,
  

  },
  secondline:{
    paddingTop:4,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  secondview:{
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:4,

  },
  thirdline:{
    paddingTop:4,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  thirdview:{
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:4,


  },
  chartBtn:{
    width: 150,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'limegreen'

  },
  chartText:{
    flex:1,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingBottom:4,
    marginTop:1,

  },
  fourline:{
    paddingTop:4,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  fourview:{
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:4,
  

  },
  fifthline:{
    paddingTop:4,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  fifthview:{
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:4,
  

  },
  sixline:{
    paddingTop:4,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  sixview:{
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:4,
  

  },
  sevenline:{
    paddingTop:4,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  sevenview:{
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:4,
  

  }
});
