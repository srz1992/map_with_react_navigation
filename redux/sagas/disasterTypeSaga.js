import {put, takeLatest} from 'redux-saga/effects';
import {DISASTER_TYPE_ACTIONS} from '../actions/disasterTypeActions';

function* fetchTypes(action) {    
    try {
        console.log('in fetchTypes in disasterTypeSaga');
    } catch (error) {
        console.log('error in fetchTypes in disasterTypeSaga', error);    
    }
}

function* mapSaga() {
    yield takeLatest (DISASTER_TYPE_ACTIONS.FETCH_DISASTER_TYPE, fetchTypes)
  }
  
  export default mapSaga;