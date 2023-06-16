import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import OnePage from '../../components/OnePage/OnePage';
import ProductSell from '../ProductSell/ProductSell';
import { FiMail } from 'react-icons/fi';
import { BiPhoneCall } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import './About.scss';
import LogoHome from '../../components/LogoHome/LogoHome';
function About() {
    function handleShow() {
        let eles = document.getElementsByClassName('item-info');
        eles[0].lastElementChild.classList.add('active');
        eles[0].firstElementChild.classList.add('active-arrow');

        for (let i of eles) {
            // i.classList.add
            // console.log(i.key());
            i.addEventListener('click', () => {
                for (let i of eles) {
                    i.lastElementChild.classList.remove('active');
                    i.firstElementChild.classList.remove('active-arrow');
                }
                // console.log(i.lastElementChild.classList.length);
                i.lastElementChild.classList.toggle('active');
                i.firstElementChild.classList.toggle('active-arrow');
            });
        }
    }
    useEffect(() => {
        handleShow();
        console.log();
    });
    return (
        <div className="about">
            <Header />
            <div className="body-cv">
                <div className="navbar-menu">
                    <img src="/img/imghomepage.jpg"></img>
                    <h3 className="frist-info">THÔNG TIN CÁ NHÂN</h3>
                    <ul className="contact">
                        <li className="email">
                            <a href="mailto:khoanono963@gmail.com">
                                <FiMail />
                                <span>khoanono963@gmail.com</span>
                            </a>
                        </li>
                        <li className="phone">
                            <a href="tel:+84344387378">
                                <BiPhoneCall />
                                <span> (+84)344387378</span>
                            </a>
                        </li>
                        <li className="facebook">
                            <a href="https://www.facebook.com/jintran2802" target="_blank">
                                <FaFacebook />
                                <span>Trần Tấn Khoa</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="menu-info">
                        <li className="item-info">
                            <h3 className="item-title">MỤC TIÊU NGHỀ NGHIỆP</h3>
                            <div className="item-body">
                                <p>
                                    Nhân viên bán hàng hiệu xuất cao với X năm kinh nghiệm trong lĩnh vực A, B, C. Kỹ
                                    năng thế mạnh bao gồm tìm kiếm khách hàng tiềm năng, chốt sales và giao tiếp. Trong
                                    quá khứ đã đạt thành tích vượt 15% KPI của năm. Hiện đang tìm kiếm cơ hội trở thành
                                    nhân viên bán hàng và đóng góp tăng trưởng doanh thu cho công ty X.
                                </p>
                            </div>
                        </li>
                        <li className="item-info">
                            <h3 className="item-title">KINH NGHIỆM LÀM VIỆC</h3>
                            <div className="item-body">
                                <p>KINH NGHIỆM LÀM VIỆC</p>
                            </div>
                        </li>
                        <li className="item-info">
                            <h3 className="item-title">HOẠT ĐỘNG</h3>
                            <div className="item-body">
                                <p>Hoạt động</p>
                            </div>
                        </li>
                        <li className="item-info">
                            <h3 className="item-title">HỌC VẤN</h3>
                            <div className="item-body">
                                <p>Học vấn</p>
                            </div>
                        </li>
                        <li className="item-info">
                            <h3 className="item-title">CÁC KỸ NĂNG</h3>
                            <div className="item-body">
                                <p>các kỹ năng</p>
                            </div>
                        </li>
                        <li className="item-info">
                            <h3 className="item-title">CHỨNG CHỈ</h3>
                            <div className="item-body">
                                <p>chứng chỉ</p>
                            </div>
                        </li>
                        <li className="item-info">
                            <h3 className="item-title">SỞ THÍCH</h3>
                            <div className="item-body">
                                <p>sở thích</p>
                            </div>
                        </li>
                        <li className="item-info">
                            <h3 className="item-title">DANH HIỆU VÀ GIẢI THƯỞNG</h3>
                            <div className="item-body">
                                <p>giải thưởng</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="nav-item"></div>
            </div>
            <LogoHome />
        </div>
    );
}

export default About;
