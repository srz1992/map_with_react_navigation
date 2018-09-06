import { all } from 'redux-saga/effects';
import disasterTypeSaga from "./disasterTypeSaga";



export default function* rootSaga() {
  yield all([
    disasterTypeSaga()
  ]);
}
