import React, { Fragment } from 'react';
import ban from '../img/header-porsche.jpg';
import ban2 from '../img/header1.jpg';
import ban3 from '../img/header4.jpg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader';
import { NavLink } from 'react-router-dom'

export default function Banner(props) {
    const { items, newsInfo, loading, error } = useSelector(state => state.skills);

    if (loading) {
        return <Loader></Loader>;
    }
    if (error) {
        return <p className="error">Произошла ошибка!</p>;
    }

    return (
        <Fragment>

            <AwesomeSlider>
                <div className="banner">
                    <div className="col d-none d-md-block banner-pad">
                        <img src={ban} alt="News slider" />
                    </div>
                    <div className="banner-wrap" >
                        <NavLink className="a-link" exact to="/electromobiles/elektromobili-svoimi-rukami/0" >

                            <p className="banner-header"><b>PORSCHE CAYENNE ELECTRIC ЭЛЕКТРОМОБИЛЬ СВОИМИ РУКАМИ</b></p>
                            <p className=""><b>Технические характеристики:</b></p>
                            <ul className="banner-header-text">
                                <li>Электродвигатель мощностью 225 кВт</li>
                                <li>Макс. скорость 180км/ч</li>
                                <li>Разгон 0-100км/ч - 9сек</li>
                                <li>Аккумуляторная батарея (385 В, 240 Ач)</li>
                                <li>Дальность пробега на одной зарядке - 400 км.</li>
                                <li>Время полной зарядки – 220Вольт - 6-8 часов, 380Вольт - 4 часа</li>
                            </ul>
                        </NavLink>
                    </div>
                </div>
                <div className="banner">
                    <div className="col d-none d-md-block banner-pad">
                        <img src={ban2} alt="News slider" />
                    </div>
                    <div className="banner-wrap">
                        <NavLink className="a-link" exact to="/electromobiles/elektromobili-svoimi-rukami/5" >

                            <p className="banner-header"><b>ЭЛЕКТРОМОБИЛЬ NISSAN 300 ZX СВОИМИ РУКАМИ</b></p>
                            <p className=""><b>Технические характеристики:</b></p>
                            <ul className="banner-header-text">
                                <li>Донор - 1986 Nissan 300 ZX</li>
                                <li>Максимальная скорость - 130 км/ч</li>
                                <li>Запас хода - 128 км</li>
                                <li>Тип аккомулятора - LifePO4</li>
                                <li>Контроллер: Soliton 1</li>
                                <li>Электродвигатель: ADC 9 Inch</li>
                            </ul>
                        </NavLink>
                    </div>
                </div>
                <div className="banner">
                    <div className="col d-none d-md-block banner-pad">
                        <img src={ban3} alt="News slider" />
                    </div>
                    <div className="banner-wrap">
                        <NavLink className="a-link" exact to="/electromobiles/elektromobili-svoimi-rukami/6" >

                            <p className="banner-header"><b>САМОДЕЛЬНЫЙ ЭЛЕКТРОМОБИЛЬ ГАЗ М-21</b></p>
                            <p className=""><b>Технические характеристики:</b></p>
                            <ul className="banner-header-text">
                                <li>Электродвигатель мощностью 88 кВт</li>
                                <li>Макс. скорость 80км/ч</li>
                                <li>Аккумуляторная батарея (96 В)</li>
                                <li>Дальность пробега на одной зарядке - 100 км.</li>
                                <li>Время полной зарядки – 3,5 часа</li>
                            </ul>
                        </NavLink>
                    </div>
                </div>
            </AwesomeSlider>
        </Fragment>
    )
}
