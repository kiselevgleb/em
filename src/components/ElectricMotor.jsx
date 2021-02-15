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

export default function ElectricMotor(props) {
    // const { hits, loading, error } = useSelector(state => state.skills);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getHitRequest());
    // }, [dispatch])

    // if (hits === undefined || hits.length === 0) {
    //     return null;
    // }

    // const getOrderRequest = id => {
    //     console.log(id)
    //     dispatch(getOrderInfoRequest(id));
    //     // props.history.push(`/catalog/${id}`);
    //     props.history.push(`/react-shoe-store/build/catalog/${id}`);
    // };

    // if (loading) {
    //     return <Loader></Loader>;
    // }
    // if (error) {
    //     return <p className="error">Произошла ошибка!</p>;
    // }
    console.log(motors)
    let hits = motors.text;
    let arr = hits.split('\n\n');
    let arrHits = [];
    let id = 0;
    arr.forEach(e => {
        arrHits.push({
            "id": id,
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
                            <div className="card card-line">
                                <p className="card-text">{o.header}</p>
                                <img src={o.img} className="card-img-top img-fluid" alt={o.header} />
                                {/* <div className="card-body">
                                    <p className="card-text">{o.text}</p>
                                </div> */}
                            </div>
                        </div>)}
                </div>
            </section>
        </Fragment>
    )
}