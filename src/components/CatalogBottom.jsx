import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderInfoRequest, getHitRequest } from '../actions/actionCreators';
import Loader from 'react-loader';
import child from '../img/child10.jpg';
import baggi from '../img/baggi.jpg';

export default function Hit(props) {
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

    return (
        <Fragment>
            <section className="top-sales">
                {/* <h2 className="text-center">Каталог</h2> */}
                <div className="row">

                    <div className="col-4">
                        <div className="card-body card-body-padding">
                            <img src={child} className="card-img-top img-fluid card-img" alt="Детский электромобиль своими руками" />

                        </div>
                    </div>
                    <div className="col-4">
                        <p className="card-text">Детские электромобили </p>
                        <ul className="banner-header-text">
                            <li>Детский электромобиль своими руками</li>
                            <li>Детские электромобили 6 Вольт</li>
                            <li>Детские электромобили 12 Вольт</li>
                            <li>Детские электромобили 24 Вольт</li>
                            <li>Детские электромобили, Производители</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        {/* <div className="card-catalog3"> */}
                            {/* <img src={o.images[0]} className="card-img-top img-fluid" alt={o.title} /> */}
                            <div className="card-body card-border">
                                <img src={baggi} className="card-img-top img-fluid" alt="ЭЛЕКТРОБАГГИ" />
                                <p className="card-text"><b>ЭЛЕКТРОБАГГИ</b></p>
                                <p className="card-text ">Детский электро багги своими руками</p>
                                {/* <a className="btn btn-outline-primary" onClick={() => getOrderRequest(o.id)}>Заказать</a> */}
                            </div>
                        {/* </div> */}
                    </div>
                    {/* )} */}
                </div>
            </section>
        </Fragment>
    )
}