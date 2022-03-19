import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Top, Logo } from '../../components/MainTopBottomLogo';
import TopNav from '../../components/TopNav';
import { ImHome2 } from 'react-icons/im';
import './Detail.scss';

const Detail = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/imgSlide.json')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div className="Detail">
      <Top />
      <Logo navi={'/'} />
      <TopNav />
      <div className="itemWrapper">
        <div className="navi">
          <ImHome2 />
          <span>
            {'>'} INTERIOR {'>'} Detail
          </span>
        </div>
        <div className="itemInfo">
          <div className="itemMainImg">
            <img src={data[0]?.url} alt={data[0]?.title} />
          </div>
          <div className="itemDescription">
            <div className="itemTitle">{data[0]?.title}</div>
            <div className="itemInfoDetail">
              <ul>
                <li>NAME</li>
                <li>SIZE</li>
                <li>LOCATION</li>
              </ul>
              <ul>
                <li>무제</li>
                <li>20평</li>
                <li>망미동</li>
              </ul>
              <ul>
                <li>TYPE</li>
                <li>STATUS</li>
                <li>DATE</li>
              </ul>
              <ul>
                <li>판자집</li>
                <li>완 공</li>
                <li>2022.03</li>
              </ul>
            </div>
            <div className="itemDetail">
              한정된 예산으로 분위기 있고 가볍게 한잔 할수 있는 따뜻한 느낌의
              가게이다.목재 마감 느낌과 가구의 조화를 이루면서 전체적으로 따뜻한
              느낌이며 작은 공간에 답답하지 않게 천정을 노출하였고 균형있는 목재
              마감으로 소음 울림을 작은 공간에도 효율적으로 차단할 수 있었다.
              SUDA를 방문 하는 모두에게 따뜻한 공간이 ​전해지길 바랍니다.
            </div>
          </div>
        </div>
        <div className="itemImgList">
          {data?.map((item, index) => {
            return (
              <div className="listImgBox">
                <img src={item.url} alt={item.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
