import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Top, Logo } from '../../components/MainTopBottomLogo';
import TopNav from '../../components/TopNav';
import { ImHome2 } from 'react-icons/im';
import './Product.scss';

const Product = () => {
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
    <div className="Product">
      <Top />
      <Logo navi={'/'} />
      <TopNav />
      <div className="itemWrapper">
        <div className="navi">
          <ImHome2 /> <span> {'>'} INTERIOR</span>
        </div>
        <div className="title">INTERIOR({data.length})</div>
        <div className="itemContainer">
          {data?.map((item, index) => {
            return (
              <div
                className="itemBox"
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                }}
              >
                <div className="itemImg">
                  <img src={item.url} alt={item.description} />
                </div>
                <div className="itemTitle">{item.title}</div>
                <div className="itemDescription">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
