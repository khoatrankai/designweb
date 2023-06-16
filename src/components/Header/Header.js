import React, { useState } from 'react';
import './Header.scss';
function Header() {
    let [changecolor, setcolor] = useState(false);
    let products = [
        { id: 1, name: 'product #1', href: 'http://localhost:3001/productsell' },
        { id: 2, name: 'product #2', href: '#2' },
        { id: 3, name: 'product #3', href: '#' },
        { id: 4, name: 'product #4', href: '#' },
        { id: 5, name: 'product #5', href: '#' },
    ];
    // color.style.backgroundColor = 'black';
    // window.scroll = e => {
    //     let scroll = window.pageYOffset;
    //     if(scroll > 1){
    //         color.style.backgroundColor = 'black';
    //     }
    // }
    const changeScroll = () => {
        let scroll = window.pageYOffset;
        if (scroll > 80) {
            setcolor(true);
        } else {
            setcolor(false);
        }
    };
    window.addEventListener('scroll', changeScroll);
    return (
        <div id="info-header" className={changecolor ? 'change-active' : ''}>
            <div className="logo-TTK">
                <img src="https://assets.manutd.com/AssetPicker/images/0/0/3/2/197240/Header-Logo1500994616801.png"></img>
            </div>
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="http://localhost:3001/">
                        <span>Home</span>
                    </a>
                </li>
                <li className="nav-item products">
                    <a href="#">
                        <span>Products</span>
                    </a>
                    <ul className="list-products">
                        {products.map((e) => (
                            <li key={e.id} className="product-item">
                                <a href={e.href}>{e.name}</a>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="http://localhost:3001/about">
                        <span>About</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#">
                        <span>Blog</span>
                    </a>
                </li>
            </ul>
            <div className="search-menu"></div>
        </div>
    );
}

export default Header;
