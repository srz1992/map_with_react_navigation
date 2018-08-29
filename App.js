import React from 'react';
import { MapView } from 'expo';
import {GOOGLE_API_KEY} from './key';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      markers: [
        {latlng:{latitude: 37.807177, longitude: -122.438176},
          title: 'Meow',
          description: "This is a marker"
        },
        {latlng:{latitude: 37.807166, longitude: -122.428300},
        title: 'Bark',
        description: "This is a marker"
        },
        {latlng:{latitude: 37.807199, longitude: -122.418200},
          title: 'Ribbit',
          description: "This is a marker"
        }
      ]
    }
  }
  
  myfunction = () => {
    console.log('hello'); 
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
       {this.state.markers.map((marker,i) => (
    <MapView.Marker
      key={i}
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
    />
  ))}
  
      {/* <MapViewDirections 
      origin={this.state.markers[0]}
      destination={this.state.markers[1]}
      apikey={GOOGLE_API_KEY.GOOGLE_API_KEY}
      strokeWidth={3}
      strokeColor="hotpink"
      /> */}
      
      </MapView>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to map" onPress={()=>this.props.navigation.navigate('Map')}></Button>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Map: Map,
},
{
  initialRouteName: 'Home'
});

export default class App extends React.Component {
  render(){
    return <RootStack />
  }
}