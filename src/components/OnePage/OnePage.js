import React, { useState } from 'react';
import './OnePage.scss';
import { FaArrowRight } from 'react-icons/fa';
function OnePage() {
    let [page2, setpage2] = useState(false);
    const unhideIMG = () => {
        let scroll = window.pageYOffset;
        if (scroll > 800) {
            setpage2(true);
        }
    };
    window.addEventListener('scroll', unhideIMG);
    return (
        <div id="home-page">
            <div className="introduce">
                <img src="/img/imghomepage.jpg" className="imghomepage"></img>
                <div className="display-modal"></div>
                <button className="btn-about">
                    <a href="">
                        <div className="icon-btn-about">
                            <FaArrowRight />
                        </div>
                        <h1>Tìm hiểu thêm</h1>
                    </a>
                </button>
                <h1 className="TTK">TTK</h1>
            </div>
            <div className="detail-info">
                <div className={page2 ? 'info-img active' : 'info-img'}>
                    <img src="/img/imgkhoa.jpg"></img>
                    <h1 className="info-name">Trần Tấn Khoa</h1>
                </div>

                <div className={page2 ? 'text-info active' : 'text-info'}>
                    <h1>Giới Thiệu</h1>
                    <p>
                        Xin Chào, Tôi tên là Trần Tấn Khoa là một coder có đam mê với code và thích được làm học hỏi
                        thêm nhiều công nghệ mới. Đặc biệt tôi đã trải qua các loại ngôn ngữ lập trình khác nhau từ
                        trường đại học và tích lũy được kinh nghiệm khá tốt nên tôi mong với kinh nghiệm này và lòng
                        nhiệt huyết với code tôi có thể góp một phần công sức của mình vào dự án mà tôi được nhận vào sẽ
                        giúp nó trở nên mạnh mẽ hơn và phát triển hơn nữa
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OnePage;
