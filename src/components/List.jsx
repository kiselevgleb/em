import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loader from 'react-loader';

export default function List(props) {
    const { newsInfo, listInfo, gibrid, motor, bett, sun, bike, motorWheel, bikeMain, scooter, baby, loading, error } = useSelector(state => state.skills);
let content = 0;
    if (loading||newsInfo===undefined) {
        return <Loader></Loader>;
    }
    if (error) {
        return <p className="error">Произошла ошибка!</p>;
    }
    if(props.location.pathname ==="/electromobiles/elektromobili-svoimi-rukami/"){
        content = newsInfo;
    } else if(props.location.pathname ==='/electromobiles/elektromobili/'){
        content = listInfo;
    } else if(props.location.pathname ==='/electromobiles/gibrid/'){
        content = gibrid;
    } else if(props.location.pathname ==='/electromobiles/motor/'){
        content = motor;
    } else if(props.location.pathname ==='/electromobiles/batteries/'){
        content = bett;
    } else if(props.location.pathname ==='/electromobiles/sunmobile/'){
        content = sun;
    } else if(props.location.pathname ==='/bike/catalog/'){
        content = bike;
    } else if(props.location.pathname ==='/bike/'){
        content = bikeMain;
    } else if(props.location.pathname ==='/motorWheel/'){
        content = motorWheel;
    }  else if(props.location.pathname ==='/scooter/'){
        content = scooter;
    }  else if(props.location.pathname ==='/babyelectromobiles/'){
        content = baby;
    } 

    document.title = content.header === undefined ?  "Электромобили своими руками" : content.header;


    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <br></br>
                        {content.header === undefined ? <div></div> : <h3>{content.header}</h3>}
                        <br></br>

                        {content.text === undefined ? <div></div> :
                            content.text.map(o =>
                               o.includes("http://electro-mobiles.ru/images") ? <img src={o} alt='' /> : <p>{o}</p>
                            )}
                        <ul className="nav flex-column">
                            {content.list === undefined ? <div></div> :
                                content.list.map(o =>
                                <li className="nav-item nav-link-footer">
                                    
                                    <NavLink exact to={o.id} >{o.header}</NavLink>
                                </li>
                                )}
                        </ul>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </main>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
