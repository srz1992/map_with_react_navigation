import React from 'react';
import { Button, View, Text } from 'react-native';
import {DISASTER_TYPE_ACTIONS} from '../redux/actions/disasterTypeActions';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    type: state.disasterType
})

class HomeScreen extends React.Component {
    
componentDidMount(){
    console.log(this.props.type)
}

    chooseDisaster = async(event) => {
        // console.log('event:', event);
        this.props.dispatch({type: DISASTER_TYPE_ACTIONS.SET_DISASTER_TYPE, payload: event})
        this.props.navigation.navigate('Map')
      }
    
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Choose a Disaster Type</Text>
          <Button title="Earthquake" onPress={()=>this.chooseDisaster('earthquake')}></Button>
          <Button title="Mudslide" onPress={()=>this.chooseDisaster('mudslide')}></Button>
          <Button title="Typhoon" onPress={()=>this.chooseDisaster('typhoon')}></Button>
        </View>
      );
    }
  }

  export default connect(mapStateToProps)(HomeScreen)