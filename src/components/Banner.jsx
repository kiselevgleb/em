import React, { Fragment } from 'react';
import ban from '../img/header-porsche.jpg';

export default function Banner() {

    return (
        <Fragment>
            <div className="banner">
                <img src={ban} alt="News slider" />
                {/* <h4 className="banner-header">PORSCHE CAYENNE ELECTRIC ЭЛЕКТРОМОБИЛЬ СВОИМИ РУКАМИ</h4> */}
                <div className="banner-wrap">
                <p className="banner-header"><b>PORSCHE CAYENNE ELECTRIC ЭЛЕКТРОМОБИЛЬ СВОИМИ РУКАМИ</b></p>
                <p className=""><b>Технические характеристики:</b></p>
                <ul className="banner-header-text">
                    <li>Донор - 1986 Nissan 300 ZX</li>
                    <li>Максимальная скорость - 130 км/ч</li>
                    <li>Запас хода - 128 км</li>
                    <li>Тип аккомулятора - LifePO4</li>
                    <li>Контроллер: Soliton 1</li>
                    <li>Электродвигатель: ADC 9 Inch</li>
                </ul>
                </div>
            </div>
        </Fragment>
    )
}
