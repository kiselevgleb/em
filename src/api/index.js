import listElectrHand from '../content/electrisCarsHandMade/list.json';
import listElectr from '../content/electrisCarsCatalog/list.json';
import listGibrid from '../content/electrisGibrid/list.json';
import listMotor from '../content/electricMotors/list.json';
import listBett from '../content/electrisBatteries/list.json';
import listSun from '../content/electrisSun/list.json';
import listBike from '../content/electrisBike/list.json';
import listMotorWheel from '../content/motorWheel/list.json';
import listBikeMain from '../content/bike/list.json';
import listScooter from '../content/electricsScooter/list.json';
import listBaby from '../content/electrisBabyCarsHandMade/list.json';

export const baby = () => {
    const response =  listBaby;
    return response;
}


export const bett = () => {
    const response =  listBett;
    return response;
}

export const motor = () => {
    const response = listMotor;
    return response;
}

export const gibrid = () => {
    const response = listGibrid;
    return response;
}

export const newsInfo = () => {
    const response = listElectrHand;
    return response;
}

export const listInfo = () => {
    const response =  listElectr;
    return response;
}

export const sun = () => {
    const response =  listSun;
    return response;
}
export const bike = () => {
    const response =  listBike;
    return response;
}
export const motorWheel = () => {
    const response =  listMotorWheel;
    return response;
}
export const bikeMain = () => {
    const response =  listBikeMain;
    return response;
}
export const scooter = () => {
    const response =  listScooter;
    return response;
}
