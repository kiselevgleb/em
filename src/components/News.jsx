import React, { Fragment, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import ReactPlayer from 'react-player'
import Loader from 'react-loader';

export default function List(props) {
    const { newsInfo, listInfo, gibrid, motor, sun, bike, motorWheel, bikeMain, scooter, baby, loading, error } = useSelector(state => state.skills);
    let { id } = useParams();
    let cont = undefined;

    if (loading || newsInfo.list === undefined) {
        return <Loader></Loader>;
    }
    if (error) {
        return <p className="error">Произошла ошибка!</p>;
    }
    console.log(props.location.pathname)
    if (props.location.pathname === `/electromobiles/elektromobili-svoimi-rukami/${id}`) {
        cont = newsInfo.list[id];
    } else if (props.location.pathname === `/electromobiles/elektromobili/${id}`) {
        cont = listInfo.list[id];
    } else if (props.location.pathname === `/electromobiles/gibrid/${id}`) {
        cont = gibrid.list[id];
    } else if (props.location.pathname === `/electromobiles/motor/${id}`) {
        cont = motor.list[id];
    } else if (props.location.pathname === `/electromobiles/sunmobile/${id}`) {
        cont = sun.list[id];
    } else if (props.location.pathname === `/bike/catalog/${id}`) {
        cont = bike.list[id];
    } else if (props.location.pathname === `/motorWheel/${id}`) {
        cont = motorWheel.list[id];
    } else if (props.location.pathname === `/bike/${id}`) {
        cont = bikeMain.list[id];
    } else if (props.location.pathname === `/scooter/${id}`) {
        cont = scooter.list[id];
    } else if (props.location.pathname === `/babyelectromobiles/${id}`) {
        cont = baby.list[id];
    }
    document.title = cont.header === undefined ? "Электромобили своими руками" : cont.header;
    return (

        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <br></br>
                        {cont === undefined || cont.header === undefined ? <div></div> : <h3>{cont.header}</h3>}
                        <br></br>
                        <ul className="nav flex-column">
                            {cont === undefined || cont.img === undefined ? <div></div> :
                                cont.img.map(o => <li><img src={o.url} alt={cont.header} /><br></br>
                                    <p>{o.text === undefined ? <div></div> : o.text} </p>
                                </li>)
                            }
                            {cont !== undefined && cont.img !== undefined && cont.img[0] == null && cont.video !== undefined && cont.video[0] !== null ? cont.video.map(o => <li><ReactPlayer url={o.url} /></li>) :
                                <div></div>
                            }
                        </ul>
                        <br></br>
                        <ul className="nav flex-column">
                            {cont === undefined || cont.text === undefined ? <div></div> :
                                cont.text.map(o => o === "Технические характеристики:" || o == "Подкапотное пространство" || o == "В салоне" || o == "В задней части авто (в багажнике)" || o == "Приборная панель" ? <li className="nav-item"><br></br><b>{o}</b></li> : o.includes("http://electro-mobiles.ru/images") ? <img className="img-size" src={o} alt='-' /> : <li className="nav-item">{o}</li>)}
                        </ul>
                        <br></br>
                        <ul className="nav flex-column">
                            {cont === undefined || cont.video === undefined || cont.img !== undefined && cont.img[0] == null ? <div></div> :
                                cont.video.map(o =>
                                    <li>
                                        <p>{o.text === undefined ? <div></div> : o.text} </p><br></br>
                                        <ReactPlayer url={o.url} />
                                    </li>
                                )}
                        </ul>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </main>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
