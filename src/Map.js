import React from 'react';
import { MapView } from 'expo';
import {GOOGLE_API_KEY} from '../key';

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
        
        <MapView.Polyline
          coordinates={
        this.state.markers.map(marker => marker.latlng)
    }
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
              '#7F0000',
              '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000'
          ]}
          strokeWidth={6}
      />
        </MapView>
      );
    }
  }

  export default Map;