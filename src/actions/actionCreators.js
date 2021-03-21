import {
  GET_LISTINFO_REQUEST,
  GET_LISTINFO_FAILURE,
  GET_LISTINFO_SUCCESS,
  
  GET_ORDERINFO_REQUEST,
  GET_ORDERINFO_FAILURE,
  GET_ORDERINFO_SUCCESS,

  GET_LISTGIBRID_REQUEST,
  GET_LISTGIBRID_FAILURE,
  GET_LISTGIBRID_SUCCESS,

  GET_LISTMOTOR_REQUEST,
  GET_LISTMOTOR_FAILURE,
  GET_LISTMOTOR_SUCCESS,

  GET_LISTBETT_REQUEST,
  GET_LISTBETT_FAILURE,
  GET_LISTBETT_SUCCESS,

  GET_LISTSUN_REQUEST,
  GET_LISTSUN_FAILURE,
  GET_LISTSUN_SUCCESS,
  
  GET_LISTBIKE_REQUEST,
  GET_LISTBIKE_FAILURE,
  GET_LISTBIKE_SUCCESS,
  
  GET_MOTORWHEEL_REQUEST,
  GET_MOTORWHEEL_FAILURE,
  GET_MOTORWHEEL_SUCCESS,

  GET_BIKE_REQUEST,
  GET_BIKE_FAILURE,
  GET_BIKE_SUCCESS,

  GET_SCOOTER_REQUEST,
  GET_SCOOTER_FAILURE,
  GET_SCOOTER_SUCCESS,

  GET_BABY_REQUEST,
  GET_BABY_FAILURE,
  GET_BABY_SUCCESS,

} from './actionTypes';

export const getBabyRequest = () => ({
  type: GET_BABY_REQUEST,
});

export const getBabyFailure = errorBaby => ({
  type: GET_BABY_FAILURE,
  payload: { errorBaby },
});

export const getBabySuccess = baby => ({
  type: GET_BABY_SUCCESS,
  payload: { baby },
});


export const getScooterRequest = () => ({
  type: GET_SCOOTER_REQUEST,
});

export const getScooterFailure = errorScooter => ({
  type: GET_SCOOTER_FAILURE,
  payload: { errorScooter },
});

export const getScooterSuccess = scooter => ({
  type: GET_SCOOTER_SUCCESS,
  payload: { scooter },
});


export const getBikeRequest = () => ({
  type: GET_BIKE_REQUEST,
});

export const getBikeFailure = errorBikeMain => ({
  type: GET_BIKE_FAILURE,
  payload: { errorBikeMain },
});

export const getBikeSuccess = bikeMain => ({
  type: GET_BIKE_SUCCESS,
  payload: { bikeMain },
});

export const getMotorWheelRequest = () => ({
  type: GET_MOTORWHEEL_REQUEST,
});

export const getMotorWheelFailure = errorMotorWheel => ({
  type: GET_MOTORWHEEL_FAILURE,
  payload: { errorMotorWheel },
});

export const getMotorWheelSuccess = motorWheel => ({
  type: GET_MOTORWHEEL_SUCCESS,
  payload: { motorWheel },
});

export const getListBikeRequest = () => ({
  type: GET_LISTBIKE_REQUEST,
});

export const getListBikeFailure = errorBike => ({
  type: GET_LISTBIKE_FAILURE,
  payload: { errorBike },
});

export const getListBikeSuccess = bike => ({
  type: GET_LISTBIKE_SUCCESS,
  payload: { bike },
});



export const getListSunRequest = () => ({
  type: GET_LISTSUN_REQUEST,
});

export const getListSunFailure = errorSun => ({
  type: GET_LISTSUN_FAILURE,
  payload: { errorSun },
});

export const getListSunSuccess = sun => ({
  type: GET_LISTSUN_SUCCESS,
  payload: { sun },
});


export const getListBettRequest = () => ({
  type: GET_LISTBETT_REQUEST,
});

export const getListBettFailure = errorBett => ({
  type: GET_LISTBETT_FAILURE,
  payload: { errorBett },
});

export const getListBettSuccess = bett => ({
  type: GET_LISTBETT_SUCCESS,
  payload: { bett },
});


export const getListInfoRequest = () => ({
  type: GET_LISTINFO_REQUEST,
});

export const getListInfoFailure = errorList => ({
  type: GET_LISTINFO_FAILURE,
  payload: { errorList },
});

export const getListInfoSuccess = listInfo => ({
  type: GET_LISTINFO_SUCCESS,
  payload: { listInfo },
});

export const getOrderInfoRequest = () => ({
  type: GET_ORDERINFO_REQUEST,
});

export const getOrderInfoFailure = errorInfo => ({
  type: GET_ORDERINFO_FAILURE,
  payload: { errorInfo },
});

export const getOrderInfoSuccess = newsInfo => ({
  type: GET_ORDERINFO_SUCCESS,
  payload: { newsInfo },
});



export const getListMotorRequest = () => ({
  type: GET_LISTMOTOR_REQUEST,
});

export const getListMotorFailure = errorMotor => ({
  type: GET_LISTMOTOR_FAILURE,
  payload: { errorMotor },
});

export const getListMotorSuccess = motor => ({
  type: GET_LISTMOTOR_SUCCESS,
  payload: { motor },
});



export const getListGibridRequest = () => ({
  type: GET_LISTGIBRID_REQUEST,
});

export const getListGibridFailure = errorGibrid => ({
  type: GET_LISTGIBRID_FAILURE,
  payload: { errorGibrid },
});

export const getListGibridSuccess = gibrid => ({
  type: GET_LISTGIBRID_SUCCESS,
  payload: { gibrid },
});