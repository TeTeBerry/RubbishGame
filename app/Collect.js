import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

let wasteEn=require('./data/wasteEn.json');

export default class Collect extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      responseText:null
    };
  }


  _post(){
    if(this.props.id==1){
      fetch('http://smartbin.devfunction.com/api/', {
        method: 'post',
        body: JSON.stringify({
          team_id: 8,
          secret: 'MJUY8E',
          waste_statistics: 
            {
              category: "apple",
              selected: 1
            },
            
          bin_statistics: {
            compostable: 1,
          }
        })
      })
    }else if(this.props.id==2){
    fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "tis",
            selected: 1
          },
          
        bin_statistics: {
          recycle: 1,
        }
      })
    })
}else if (this.props.id==3){
fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "plastic",
            selected: 1
          },
          
        bin_statistics: {
          recycle: 1,
        }
      })
    })
}else if (this.props.id==4){
fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "beef",
            selected: 1
          },
          
        bin_statistics: {
          compostable: 1,
        }
      })
    })
  }else if (this.props.id==5){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "battery",
            selected: 1
          },
          
        bin_statistics: {
          hazardous: 1,
        }
      })
    })
  }else if (this.props.id==6){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "bottle",
            selected: 1
          },
          
        bin_statistics: {
          recycle: 1,
        }
      })
    })
  }else if (this.props.id==7){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "box",
            selected: 1
          },
          
        bin_statistics: {
          recycle: 1,
        }
      })
    })
  }else if (this.props.id==8){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "boxb",
            selected: 1
          },
          
        bin_statistics: {
          recycle: 1,
        }
      })
    })
  }else if (this.props.id==9){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "carrot",
            selected: 1
          },
          
        bin_statistics: {
          compostable: 1,
        }
      })
    })
  }else if (this.props.id==10){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "chemistry",
            selected: 1
          },
          
        bin_statistics: {
          hazardous: 1,
        }
      })
    })
  }else if (this.props.id==11){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "chicken",
            selected: 1
          },
          
        bin_statistics: {
          general: 1,
        }
      })
    })
  }else if (this.props.id==12){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "clothes",
            selected: 1
          },
          
        bin_statistics: {
          recycle: 1,
        }
      })
    })
  }else if (this.props.id==13){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "french",
            selected: 1
          },
          
        bin_statistics: {
          general: 1,
        }
      })
    })
  }else if (this.props.id==14){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "grape",
            selected: 1
          },
          
        bin_statistics: {
          compostable: 1,
        }
      })
    })
  }else if (this.props.id==15){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "light",
            selected: 1
          },
          
        bin_statistics: {
          hazardous: 1,
        }
      })
    })
  }else if (this.props.id==16){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "lips",
            selected: 1
          },
          
        bin_statistics: {
          hazardous: 1,
        }
      })
    })
  }else if (this.props.id==17){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "medic",
            selected: 1
          },
          
        bin_statistics: {
          hazardous: 1,
        }
      })
    })
  }else if (this.props.id==18){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "nail",
            selected: 1
          },
          
        bin_statistics: {
          recycle: 1,
        }
      })
    })
  }else if (this.props.id==19){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "paper",
            selected: 1
          },
          
        bin_statistics: {
          recycle: 1,
        }
      })
    })
  }else if (this.props.id==20){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "starbar",
            selected: 1
          },
          
        bin_statistics: {
          recycle: 1,
        }
      })
    })
  }else if (this.props.id==21){
  fetch('http://smartbin.devfunction.com/api/', {
      method: 'post',
      body: JSON.stringify({
        team_id: 8,
        secret: 'MJUY8E',
        waste_statistics: 
          {
            category: "straw",
            selected: 1
          },
          
        bin_statistics: {
          general: 1,
        }
      })
    })
}
}

_get(){
  fetch('http://smartbin.devfunction.com/api/?team_id=8&secret=MJUY8E')
  .then((response)=>wasteEn.json())
  .then((responseJSON)=>{
    this.setState({
      general:responseJSON.data.bin_statistics.general,
      compostable:responseJSON.data.bin_statistics.compostable,
      recycle:responseJSON.data.bin_statistics.recycle,
      hazardous:responseJSON.data.bin_statistics.hazardous,

    })
  })
}
  render() {
      return (
      <View style={styles.container}>

      <Text style={styles.item} onPress={this._get.bind(this)}>Get Data</Text>
      <Text>{this.state.responseText}</Text>
      
        
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
  
});
