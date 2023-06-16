import React, { useState } from 'react';
import LogoHome from '../../components/LogoHome/LogoHome';
import Header from '../../components/Header/Header';
import OnePage from '../../components/OnePage/OnePage';
import ProductSell from '../ProductSell/ProductSell';
import './Homepage.scss';
function Homepage() {
    return (
        <div>
            <Header />
            <OnePage />
            <LogoHome />
        </div>
    );
}

export default Homepage;
