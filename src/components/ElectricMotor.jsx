import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderInfoRequest, getHitRequest } from '../actions/actionCreators';
import Loader from 'react-loader';
import motors from '../content/motor/motor.json';
import motor1 from '../img/motor1.jpg';
import motor2 from '../img/motor2.jpg';
import motor3 from '../img/motor3.jpg';
import motor4 from '../img/motor4.jpg';
import electrobel2 from '../img/electro-bel2.jpg';
import { NavLink } from 'react-router-dom'

export default function ElectricMotor(props) {
    console.log(motors)
    let hits = motors.text;
    let arr = hits.split('\n\n');
    let arrHits = [];
    let id = 0;
    arr.forEach(e => {
        arrHits.push({
            "id": id === 0 ? 6 : id === 1 ? 0 : id === 2 ? 2 : id === 3 ? 5 : id,
            "header": e.split("\"header\":")[1].split("\"img\":")[0].slice(2, -4),
            "img": e.split("\"img\":")[1].split("\"text\":")[0].slice(2, -4),
            "text": e.split("\"text\":")[1].slice(2, -2),
        });
        id++;
    });
    const [hitsData, setHitsData] = useState(arrHits.slice(0, 4));


    return (
        <Fragment>
            <section className="top-sales">
                <h2 className="text-center">Двигатель для электромобиля</h2>
                <div className="row row-line">
                    {hitsData.map(o =>
                        <div className="col-3">
                            <NavLink className="a-link" exact to={`/electromobiles/motor/${o.id}`}>
                                <div className="card card-line">
                                    <p className="card-text">{o.header}</p>
                                    <img src={o.img} className="card-img-top img-fluid d-none d-md-block" alt={o.header} />
                                </div>
                            </NavLink>
                        </div>)}
                </div>
            </section>
        </Fragment>
    )
}