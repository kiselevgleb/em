import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderInfoRequest, getHitRequest } from '../actions/actionCreators';
import Loader from 'react-loader';

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
                <h2 className="text-center">Каталог</h2>
                <div className="row">
                    {/* {hits.map(o => */}
                        <div className="col-4">
                            <div className="card-catalog">
                                <div className="card-body">
                                    <p className="card-text"><b>Электромобиль своими руками</b></p>
                                    <p className="card-text text-bot">Более 30 проектов самодельных электромобилей.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card-catalog2">
                                <div className="card-body">
                                    <p className="card-text"><b>Электровелосипед</b></p>
                                    <p className="card-text text-bot">Более 20 проектов электровелосипедов, самодельный электровелосипеды, проекты мотор колесо.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card-catalog3">
                                <div className="card-body">
                                    <p className="card-text"><b>Электродвигатели</b></p>
                                    <p className="card-text text-bot">Электродвигатели для электромобилей, электромоторы. Таблица моделей, мощностей, характеристики электродвигателей.</p>
                                </div>
                            </div>
                        </div>
                        {/* )} */}
                </div>
            </section>
        </Fragment>
    )
}