import React, { Fragment } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';
import Hit from './components/Hit';
import Catalog from './components/Catalog';
import ElectricMotor from './components/ElectricMotor';
import CatalogBottom from './components/CatalogBottom';

export default function Main(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner history={props.history}></Banner>

                        <Hit history={props.history}></Hit>
                        <Catalog history={props.history}></Catalog>
                        <ElectricMotor history={props.history}></ElectricMotor>
                        <CatalogBottom history={props.history}></CatalogBottom>
                    </div>
                </div>
            </main>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
