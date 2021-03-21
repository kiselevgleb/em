import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderInfoRequest, getHitRequest } from '../actions/actionCreators';
import Loader from 'react-loader';
import child from '../img/child10.jpg';
import baggi from '../img/baggi.jpg';
import { NavLink } from 'react-router-dom'

export default function Hit(props) {

    return (
        <Fragment>

            <div className="row">
                <div className="col d-none d-md-block">
                    <div className="card-body card-body-padding">
                        <img src={child} className="card-img-top img-fluid card-img" alt="Детский электромобиль своими руками" />

                    </div>
                </div>
                <div className="col">
                    <p className="card-text">Детские электромобили </p>
                    <ul className="banner-header-text">
                        <NavLink className="a-link" exact to={`/babyelectromobiles/`}>Детский электромобиль своими руками</NavLink>
                        {/* <li>Детский электромобиль своими руками</li> */}
                        {/* <li>Детские электромобили 6 Вольт</li>
                            <li>Детские электромобили 12 Вольт</li>
                            <li>Детские электромобили 24 Вольт</li>
                            <li>Детские электромобили, Производители</li> */}
                    </ul>
                </div>
                <div className="col">
                    <NavLink className="a-link" exact to={`/babyelectromobiles/1`}>
                        <div className="card-body card-border">
                            <img src={baggi} className="card-img-top img-fluid" alt="ЭЛЕКТРОБАГГИ" />
                            <p className="card-text"><b>ЭЛЕКТРОБАГГИ</b></p>
                            <p className="card-text ">Детский электро багги своими руками</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </Fragment>
    )
}