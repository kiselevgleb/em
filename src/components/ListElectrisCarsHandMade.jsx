import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Banner from './Banner';
import listElectr from '../content/electrisCarsHandMade/list.json';
import List from './List';
import { useSelector, useDispatch } from 'react-redux';

export default function ListElectrisCarsHandMade(props) {

    return (
        <Fragment>
           <List></List>
        </Fragment>
    )
}
