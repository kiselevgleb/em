import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'

export default function Footer(props) {

    return (
        <Fragment>
            <footer class="container bg-light footer">
                <div className="row">
                    <div className="col">
                        <section>
                            <h5>Информация</h5>
                            {/* <ul className="nav flex-column">
                                <li className="nav-item">
                                <NavLink className="nav-link" exact to="/react-shoe-store/build/about" >О магазине</NavLink>
                                    </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" exact to="/react-shoe-store/build/catalog" >Каталог</NavLink> 
                                    </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" exact to="/react-shoe-store/build/contacts" >Контакты</NavLink> 
                                    </li>
                            </ul> */}
                        </section>
                    </div>
                    <div className="col">
                        <section>
                            {/* <h5>Принимаем к оплате:</h5>
                            <div className="footer-pay">
                                <div className="footer-pay-systems footer-pay-systems-paypal"></div>
                                <div className="footer-pay-systems footer-pay-systems-master-card"></div>
                                <div className="footer-pay-systems footer-pay-systems-visa"></div>
                                <div className="footer-pay-systems footer-pay-systems-yandex"></div>
                                <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
                                <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
                            </div> */}
                        </section>
                        <section>
                            <div className="footer-copyright">2021 © Electro-mobiles.ru — все о электромобилях.</div>
                        </section>
                    </div>
                    <div className="col text-right">
                        <section className="footer-contacts">
                            <h5>Контакты:</h5>
                            {/* <a className="footer-contacts-phone" href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a> */}
                            {/* <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span> */}
                            <a className="footer-contacts-email" href="mailto:info@electro-mobiles.ru">info@electro-mobiles.ru</a>
                            <div className="footer-social-links">
                                {/* <div className="footer-social-link footer-social-link-twitter"></div> */}
                                <a className="footer-social-link footer-social-link-vk" href="https://vk.com/club34752196"></a>
                            </div>
                        </section>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}
