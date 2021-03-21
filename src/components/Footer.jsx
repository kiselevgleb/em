import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'

export default function Footer(props) {

    return (
        <Fragment>
            <footer class="container bg-light footer">
                <div className="row">
                    <div className="col">
                        <section>
                            <h5>Новые разделы:</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item nav-link-footer">
                                    <NavLink exact to="/scooter/0" >Электросамокат</NavLink>
                                </li>
                                <li className="nav-item nav-link-footer">
                                    <NavLink exact to="/motorWheel/" >Мотор-колесо</NavLink>
                                </li>
                                <li className="nav-item nav-link-footer">
                                    <NavLink exact to="/babyelectromobiles/" >Самодельный Детский Электромобиль</NavLink>
                                </li>
                                <li className="nav-item nav-link-footer">
                                    <NavLink exact to="/electromobiles/elektromobili-svoimi-rukami/" >Самодельный Электромобиль</NavLink>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="col">
                        <section>
                        </section>
                        <section>
                            <div className="footer-copyright">2021 © Electro-mobiles.ru — все о электромобилях.</div>
                        </section>
                    </div>
                    <div className="col text-right">
                        <section className="footer-contacts">
                            <h5>Контакты:</h5>
                            <a className="footer-contacts-email" href="mailto:info@electro-mobiles.ru">info@electro-mobiles.ru</a>
                            <div className="footer-social-links">
                                <a className="footer-social-link footer-social-link-vk" href="https://vk.com/club34752196"></a>
                            </div>
                        </section>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}
