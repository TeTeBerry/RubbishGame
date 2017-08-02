import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  
} from 'react-native';

import Echarts from 'native-echarts';
import Dimensions from 'Dimensions';
const {width} = Dimensions.get('window');
export default class Chart extends Component {

  constructor(props) {
      super(props);
      this.state = {
        general:[3],
        compostable:[7],
        recycle:[6],
        hazardous:[5],

      }
  }



  render() {
    const option = {
          
          tooltip : {
              trigger: 'axis'
          },
          
          legend: {
              data:['Generral','Compostable','Recycle','Hazardous']
          },
          
          toolbox: {
              
              show : false,
              showTitle:true,
              feature : {
                  
                  dataView : {show: false, readOnly: false},
                  magicType : {
                  
                    type: ['bar'],
                  },

              }
          },
          xAxis : [
              {
                  
                  boundaryGap:true,
                  type : 'category',
                  name : 'view',
                  data : ['Amount']
              }
          ],
          yAxis : [
              {
                  type : 'value',
                  name : 'Amount'
              }
          ],
        
          color:['deepskyblue','limegreen','gold','red'],
        
          series : [
              {
                  name:'Generral',
                  type:'bar',
                  data:this.state.general
              },
              {
                  name:'Compostable',
                  type:'bar',
                  data:this.state.compostable
              },
              {  name:'Recycle',
                  type:'bar',
                  data:this.state.recycle
                },
                {
                  name:'Hazardous',
                  type:'bar',
                  data:this.state.hazardous
                }
          ]
        };
  return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Rubbish Type Statistics</Text>
        </View>

        <Echarts option={option} height={350} width={width}/>
      
      <TouchableOpacity style={styles.Btn} onPress={this._GetBtn}>
          <Text>Get</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Btn} onPress={this._PostBtn}>
          <Text>Post</Text>
        </TouchableOpacity>




      </View>

)

}
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
  },

  titleView:{
    height:Platform.OS=='ios'?64:44,
    paddingTop:Platform.OS=='ios'?14:0,
    backgroundColor:'#ff6400',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,

  },
  title:{
    color:'white',
    fontSize:20,
    textAlign:'center',

  },
  Btn:{
    width: 45,
    height: 25,
    marginTop: 60,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'gold'


  },
});

