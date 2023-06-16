import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderTTKbuy from '../../components/HeaderTTKbuy/HeaderTTKbuy';
import ReactPlayer from 'react-player';
import './ProductSell.scss';
import BodyProductSell from '../../components/BodyProductSell/BodyProductSell';
import ListProductSell from '../../components/ListProductSell/ListProductSell';
import FooterProductSell from '../../components/FooterProductSell/FooterProductSell';
function ProductSell() {
    const [videourl, setvideourl] = useState('/videos/introip.mp4');
    // window.addEventListener('scroll', () => {
    //     if (window.pageYOffset < 738) {
    //         setvideourl('/videos/introip.mp4');
    //     } else {
    //         setvideourl('/videos/quang.mp4');
    //     }
    // });
    return (
        <div className="ttkbuy">
            <HeaderTTKbuy />
            <div className="body-ttkbuy">
                <BodyProductSell />
                <ListProductSell />
                <div className="main-img-model">
                    <ReactPlayer
                        url={videourl}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="100%"
                        height="100%"
                        className="react-player-productsell"
                    />
                </div>
                <FooterProductSell />
            </div>
        </div>
    );
}

export default ProductSell;
