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
} from '../actions/actionTypes'

const initialState = {
  listInfo: {},
  newsInfo: {},
  motor: {},
  gibrid: {},
  bett: {},
  sun: {},
  bike: {},
  scooter: {},
  motorWheel: {},
  bikeMain: {},
  baby: {},
  loading: false,
  error: null,
};

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    
    
    case GET_BABY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_BABY_FAILURE:
      const { errorBaby } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorBaby,
      };
    case GET_BABY_SUCCESS:
      const { baby } = action.payload;
      return {
        ...state,
        baby,
        loading: false,
        error: null,
      };

    
    
    case GET_SCOOTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_SCOOTER_FAILURE:
      const { errorScooter } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorScooter,
      };
    case GET_SCOOTER_SUCCESS:
      const { scooter } = action.payload;
      return {
        ...state,
        scooter,
        loading: false,
        error: null,
      };


    case GET_BIKE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_BIKE_FAILURE:
      const { errorBikeMain } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorBett,
      };
    case GET_BIKE_SUCCESS:
      const { bikeMain } = action.payload;
      return {
        ...state,
        bikeMain,
        loading: false,
        error: null,
      };


    case GET_MOTORWHEEL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_MOTORWHEEL_FAILURE:
      const { errorMotorWheel } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorMotorWheel,
      };
    case GET_MOTORWHEEL_SUCCESS:
      const { motorWheel } = action.payload;
      return {
        ...state,
        motorWheel,
        loading: false,
        error: null,
      };


    case GET_LISTBIKE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_LISTBIKE_FAILURE:
      const { errorBike } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorBett,
      };
    case GET_LISTBIKE_SUCCESS:
      const { bike } = action.payload;
      return {
        ...state,
        bike,
        loading: false,
        error: null,
      };

    case GET_LISTSUN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_LISTSUN_FAILURE:
      const { errorSun } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorBett,
      };
    case GET_LISTSUN_SUCCESS:
      const { sun } = action.payload;
      return {
        ...state,
        sun,
        loading: false,
        error: null,
      };

    case GET_LISTBETT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_LISTBETT_FAILURE:
      const { errorBett } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorBett,
      };
    case GET_LISTBETT_SUCCESS:
      const { bett } = action.payload;
      return {
        ...state,
        bett,
        loading: false,
        error: null,
      };

    case GET_LISTINFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_LISTINFO_FAILURE:
      const { errorList } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorList,
      };
    case GET_LISTINFO_SUCCESS:
      const { listInfo } = action.payload;
      return {
        ...state,
        listInfo,
        loading: false,
        error: null,
      };

    case GET_ORDERINFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ORDERINFO_FAILURE:
      const { errorInfo } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorInfo,
      };
    case GET_ORDERINFO_SUCCESS:
      const { newsInfo } = action.payload;
      return {
        ...state,
        newsInfo,
        loading: false,
        error: null,
      };

    case GET_LISTGIBRID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_LISTGIBRID_FAILURE:
      const { errorGibrid } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorGibrid,
      };
    case GET_LISTGIBRID_SUCCESS:
      const { gibrid } = action.payload;
      return {
        ...state,
        gibrid,
        loading: false,
        error: null,
      };


    case GET_LISTMOTOR_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_LISTMOTOR_FAILURE:
      const { errorMotor } = action.payload;
      return {
        ...state,
        loading: false,
        error: errorMotor,
      };
    case GET_LISTMOTOR_SUCCESS:
      const { motor } = action.payload;
      return {
        ...state,
        motor,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}