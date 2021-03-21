import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderInfoRequest, getHitRequest } from '../actions/actionCreators';
import Loader from 'react-loader';
import { NavLink } from 'react-router-dom'

export default function Hit(props) {
    return (
        <Fragment>
            <h2 className="text-center">Каталог</h2>
            <div className="row">
                <div className="col-4 d-none d-md-block" >
                    <NavLink exact to="/electromobiles/elektromobili-svoimi-rukami/" >
                        <div className="card-catalog">
                            <div className="card-body">
                                <p className="card-text"><b>Электромобиль своими руками</b></p>
                                <p className="card-text text-bot">Более 30 проектов самодельных электромобилей.</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="col-4 d-none d-md-block">
                <NavLink exact to="/bike/catalog/" >
                    <div className="card-catalog2">
                        <div className="card-body">
                            <p className="card-text"><b>Электровелосипед</b></p>
                            <p className="card-text text-bot">Более 20 проектов электровелосипедов, самодельный электровелосипеды, проекты мотор колесо.</p>
                        </div>
                    </div>
                    </NavLink>
                </div>
                <div className="col-4 d-none d-md-block">
                <NavLink exact to="/electromobiles/motor/" >

                    <div className="card-catalog3">
                        <div className="card-body">
                            <p className="card-text"><b>Электродвигатели</b></p>
                            <p className="card-text text-bot">Электродвигатели для электромобилей, электромоторы. Таблица моделей, мощностей, характеристики электродвигателей.</p>
                        </div>
                    </div>
                    </NavLink>
                </div>
            </div>
        </Fragment>
    )
}