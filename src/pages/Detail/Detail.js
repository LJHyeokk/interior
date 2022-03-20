import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Top, Logo } from '../../components/MainTopBottomLogo';
import TopNav from '../../components/TopNav';
import { ImHome2 } from 'react-icons/im';
import './Detail.scss';

const Detail = () => {
  const [data, setData] = useState([]);
  const [img, setImg] = useState();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8001/detail/${params.detail}`)
      .then((res) => res.json())
      .then((res) => {
        setData(...res.data);
        setImg(...res.data);
      });
  }, []);

  console.log();

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
            <img src={img?.img[0].url} alt={data?.title} />
          </div>
          <div className="itemDescription">
            <div className="itemTitle">{data?.title}</div>
            <div className="itemInfoDetail">
              <ul>
                <li>NAME</li>
                <li>SIZE</li>
                <li>LOCATION</li>
              </ul>
              <ul>
                <li>{data?.name}</li>
                <li>{data?.size}</li>
                <li>{data?.location}</li>
              </ul>
              <ul>
                <li>TYPE</li>
                <li>STATUS</li>
                <li>DATE</li>
              </ul>
              <ul>
                <li>{data?.type}</li>
                <li>{data?.status}</li>
                <li>{data?.date}</li>
              </ul>
            </div>
            <div className="itemDetail">{data?.description} </div>
          </div>
        </div>
        <div className="itemImgList">
          {img?.img.map((item, index) => {
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
