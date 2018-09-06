import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

// screens
import Map from "./src/Map";
import HomeScreen from "./src/HomeScreen";

// redux and sagas
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from "./redux/reducers/index";
import rootSaga from "./redux/sagas/index";

const preloadedState = {};
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const store = createStore(reducer, preloadedState, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga);



const RootStack = createStackNavigator({
  Home: HomeScreen,
  Map: Map,
},
{
  initialRouteName: 'Home'
});

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      disasterType: "default"
    }
  }

  componentDidMount(){
    // console.log("props:", this.props);

  }



  render(){
    return(  
    <Provider store={store}>
      <RootStack />   
    </Provider>
      
     );

  }

}