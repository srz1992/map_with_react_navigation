import React from 'react';
import { Button, View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Choose a Disaster Type</Text>
          <Button title="Earthquake" onPress={()=>this.props.chooseDisaster('earthquake')}></Button>
          <Button title="Mudslide" onPress={()=>this.props.chooseDisaster('earthquake')}></Button>
          <Button title="Typhoon" onPress={()=>this.props.navigation.navigate('Map')}></Button>
        </View>
      );
    }
  }