import React, { Fragment, useState, useEffect } from 'react';
import mainLogo from '../img/header-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { getListInfoRequest } from '../actions/actionCreators';
import { NavLink } from 'react-router-dom'

export default function Header(props) {
    const { loading, error, cartData } = useSelector(state => state.skills);
    const dispatch = useDispatch();
    let cionInCart = 0;
    if (cartData != [] && cartData != null) {
        cionInCart = JSON.parse(cartData).length
    }


    return (
        <Fragment>
            <header class="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                            <NavLink className="navbar-brand" exact to="/">
                                <img src={mainLogo} alt="Bosa Noga" />
                            </NavLink>
                            <div className="collapase navbar-collapse" id="navbarMain">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" exact to="/" >Главная</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <div class="dropdown">
                                            <NavLink className="nav-link" exact to="/electromobiles/elektromobili-svoimi-rukami/" onClick={() => dispatch(getListInfoRequest(0))} >Электромобили</NavLink>
                                            <div class="dropdown-content">
                                                <NavLink className="nav-link-a" exact to="/electromobiles/elektromobili-svoimi-rukami/" onClick={() => dispatch(getListInfoRequest(0))}>Электромобили своими руками</NavLink>
                                                <NavLink className="nav-link-a" exact to="/electromobiles/elektromobili/">Электромобили</NavLink>
                                                <NavLink className="nav-link-a" exact to="/electromobiles/gibrid/">Гибрид</NavLink>
                                                <NavLink className="nav-link-a" exact to="/electromobiles/motor/">Электродвигатели</NavLink>
                                                <NavLink className="nav-link-a" exact to="/electromobiles/batteries/">Аккумуляторные батареи</NavLink>
                                                <NavLink className="nav-link-a" exact to="/electromobiles/sunmobile/">Самодельный Cолнцемобиль</NavLink>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div class="dropdown">
                                            <NavLink className="nav-link" exact to="/bike/" >Электровелосипеды</NavLink>
                                            <div class="dropdown-content">
                                                <NavLink className="nav-link-a" exact to="/bike/catalog/">Электровелосипеды каталог</NavLink>
                                                <NavLink className="nav-link-a" exact to="/motorWheel/">Мотор колесо</NavLink>
                                                <NavLink className="nav-link-a" exact to="/scooter/">Электросамокат</NavLink>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div class="dropdown">
                                            <NavLink className="nav-link" exact to="/babyelectromobiles/" >Детские электромобили</NavLink>
                                            <div class="dropdown-content">
                                                <NavLink className="nav-link-a" exact to="/babyelectromobiles/">Детский электромобиль своими руками</NavLink>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}