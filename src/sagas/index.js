import { takeEvery, takeLatest, put, spawn, debounce, retry } from 'redux-saga/effects';
import {getBabySuccess, getBabyFailure, getScooterSuccess, getScooterFailure, getBikeSuccess, getBikeFailure, getMotorWheelSuccess, getMotorWheelFailure, getListBikeSuccess, getListBikeFailure, getListSunSuccess, getListSunFailure, getListBettSuccess, getListBettFailure, getListMotorSuccess, getListMotorFailure, getListGibridSuccess, getListGibridFailure, getListInfoSuccess, getListInfoFailure, getOrderInfoSuccess, getOrderInfoFailure} from '../actions/actionCreators';
import { GET_BABY_REQUEST, GET_SCOOTER_REQUEST, GET_BIKE_REQUEST, GET_MOTORWHEEL_REQUEST, GET_LISTBIKE_REQUEST, GET_LISTSUN_REQUEST, GET_LISTBETT_REQUEST, GET_LISTMOTOR_REQUEST, GET_LISTGIBRID_REQUEST, GET_ORDERINFO_REQUEST, GET_LISTINFO_REQUEST } from '../actions/actionTypes';
import { newsInfo, listInfo, gibrid, motor, bett, sun, bike, motorWheel, bikeMain, scooter, baby } from '../api/index';



function* watchBabySaga() {
    yield takeEvery(GET_BABY_REQUEST, handleBabySaga);
}

// worker
function* handleBabySaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, baby);
        yield put(getBabySuccess(data));
    } catch (e) {
        yield put(getBabyFailure(e.message));
    }
}


function* watchScooterSaga() {
    yield takeEvery(GET_SCOOTER_REQUEST, handleScooterSaga);
}

// worker
function* handleScooterSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, scooter);
        yield put(getScooterSuccess(data));
    } catch (e) {
        yield put(getScooterFailure(e.message));
    }
}



function* watchBikeSaga() {
    yield takeEvery(GET_BIKE_REQUEST, handleBikeSaga);
}

// worker
function* handleBikeSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, bikeMain);
        yield put(getBikeSuccess(data));
    } catch (e) {
        yield put(getBikeFailure(e.message));
    }
}


function* watchMotorWheelSaga() {
    yield takeEvery(GET_MOTORWHEEL_REQUEST, handleMotorWheelSaga);
}

// worker
function* handleMotorWheelSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, motorWheel);
        yield put(getMotorWheelSuccess(data));
    } catch (e) {
        yield put(getMotorWheelFailure(e.message));
    }
}




function* watchListBikeSaga() {
    yield takeEvery(GET_LISTBIKE_REQUEST, handleListBikeSaga);
}

// worker
function* handleListBikeSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, bike);
        yield put(getListBikeSuccess(data));
    } catch (e) {
        yield put(getListBikeFailure(e.message));
    }
}

function* watchListSunSaga() {
    yield takeEvery(GET_LISTSUN_REQUEST, handleListSunSaga);
}

// worker
function* handleListSunSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, sun);
        yield put(getListSunSuccess(data));
    } catch (e) {
        yield put(getListSunFailure(e.message));
    }
}




function* watchListBettSaga() {
    yield takeEvery(GET_LISTBETT_REQUEST, handleListBettSaga);
}

// worker
function* handleListBettSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, bett);
        yield put(getListBettSuccess(data));
    } catch (e) {
        yield put(getListBettFailure(e.message));
    }
}


// watcher
function* watchListMotorSaga() {
    yield takeEvery(GET_LISTMOTOR_REQUEST, handleListMotorSaga);
}

// worker
function* handleListMotorSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, motor);
        yield put(getListMotorSuccess(data));
    } catch (e) {
        yield put(getListMotorFailure(e.message));
    }
}



// watcher
function* watchListGibridSaga() {
    yield takeEvery(GET_LISTGIBRID_REQUEST, handleListGibridSaga);
}

// worker
function* handleListGibridSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, gibrid);
        yield put(getListGibridSuccess(data));
    } catch (e) {
        yield put(getListGibridFailure(e.message));
    }
}


// watcher
function* watchListInfoSaga() {
    yield takeEvery(GET_LISTINFO_REQUEST, handleListInfoSaga);
}

// worker
function* handleListInfoSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, listInfo);
        yield put(getListInfoSuccess(data));
    } catch (e) {
        yield put(getListInfoFailure(e.message));
    }
}


// watcher
function* watchOrderInfoSaga() {
    yield takeEvery(GET_ORDERINFO_REQUEST, handleOrderInfoSaga);
}

// worker
function* handleOrderInfoSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000; // ms
        const data = yield retry(retryCount, retryDelay, newsInfo);
        yield put(getOrderInfoSuccess(data));
    } catch (e) {
        yield put(getOrderInfoFailure(e.message));
    }
}



export default function* saga() {
    yield spawn(watchBabySaga);

    yield spawn(watchScooterSaga);
    yield spawn(watchBikeSaga);
    yield spawn(watchMotorWheelSaga);
    yield spawn(watchListBikeSaga);
    yield spawn(watchListGibridSaga);
    yield spawn(watchOrderInfoSaga);
    yield spawn(watchListInfoSaga);
    yield spawn(watchListMotorSaga);
    yield spawn(watchListBettSaga);
    yield spawn(watchListSunSaga);
}