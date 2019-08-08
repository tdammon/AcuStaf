import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "GET_ALL_DATA" actions
function* getData() {
  try {
    const response = yield call(axios.get, '/api');
    //console.log('API response',response)
    yield put({type: 'DISPLAY_DATA', payload: response.data})
    
  } catch (error) {
    console.log('Error getting all events:', error);
    
  }
}

//worker Saga: will be fired on "GET_USER_SEARCH" actions
function* getUserSearch(action) {
    try {
        console.log(action.payload)
        const response = yield call(axios.get, `/api/user`, {params: action.payload})
        yield put({type: 'DISPLAY_DATA', payload: response.data})

    } catch (error) {
        console.log('Error performing user search', error)
    }
}

function* apiSaga() {
  yield takeLatest('GET_ALL_DATA', getData);
  yield takeLatest('GET_USER_SEARCH', getUserSearch);
}

export default apiSaga;