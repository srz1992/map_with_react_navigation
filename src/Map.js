import React from 'react';
import { MapView } from 'expo';
import {GOOGLE_API_KEY} from '../key';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  disasterType: state.disasterType.type
})

class Map extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        markers: [
          {latlng:{latitude: 37.807177, longitude: -122.438176},
            title: 'Meow',
            description: "This is a marker",
            type: "earthquake"
          },
          {latlng:{latitude: 37.807166, longitude: -122.428300},
          title: 'Bark',
          description: "This is a marker",
          type: "mudslide"
          },
          {latlng:{latitude: 37.807199, longitude: -122.418200},
            title: 'Ribbit',
            description: "This is a marker",
            type: "typhoon"
          }
        ],
        disasterType: this.props.type
      }
    }

    async componentDidMount(){
      await this.setState({
        ...this.state,
        disasterType: this.props.disasterType
      })
      console.log('this disasterType:', this.state.disasterType);
      
    }

    // componentDidUpdate(prevProps, prevState){
    //   if(prevProps.disasterType !== this.props.disasterType){
    //     console.log('updated:', this.props.disasterType);
    //   }
    //   if(prevState.disasterType !== this.state.disasterType){
    //     console.log('it updated');
    //     console.log('new disasterType:', this.state.disasterType);
    //     console.log('old disasterType:', prevState.disasterType);
        
        
        
    //   }
    // }
  
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
         {this.state.markers.filter(marker => marker.type === this.props.disasterType).map((marker,i) => {
          console.log('the marker:', marker)
          return (
      <MapView.Marker
        key={i}
        coordinate={marker.latlng}
        title={marker.title}
        description={marker.description}
      />
    )})}
        
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

  export default connect(mapStateToProps)(Map);