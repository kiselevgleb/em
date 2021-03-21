import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderInfoRequest, getHitRequest } from '../actions/actionCreators';
import Loader from 'react-loader';
import hit from '../content/hit/hit.json';
import vesta from '../img/vesta.jpg';
import electrobel2 from '../img/electro-bel2.jpg';

export default function Hit(props) {
    console.log(hit)
    let hits = hit.text;
    let arr = hits.split('\n\n');
    let arrHits = [];
    let id = 0;
    arr.forEach(e => {
        arrHits.push({
            "id": id,
            "header": e.split("\"header\":")[1].split("\"img\":")[0].slice(2, -4),
            "img": e.split("\"img\":")[1].split("\"text\":")[0].slice(2, -4),
            "text": e.split("\"text\":")[1].slice(2, -2),
        });
        id++;
    });
    const [hitsData, setHitsData] = useState(arrHits.slice(0, 3));

    return (
        <Fragment>
            <section className="top-sales">
                <h2 className="text-center">Последние новости</h2>
                <div className="row row-line">
                    {hitsData.map(o =>
                        <div className="col-6">
                            <div className="card card-line">
                                <p className="card-text">{o.header}</p>
                                <img src={o.img} className="card-img-top img-fluid" alt={o.header} />
                                <div className="card-body">
                                    <p className="card-text">{o.text}</p>
                                </div>
                            </div>
                        </div>)}
                </div>
            </section>
        </Fragment>
    )
}