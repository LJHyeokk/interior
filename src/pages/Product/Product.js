import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Top, Logo } from '../../components/MainTopBottomLogo';
import TopNav from '../../components/TopNav';
import TopBottom from '../../components/mini';
import Footer from '../../components/Footer';
import { ImHome2 } from 'react-icons/im';
import './Product.scss';

const Product = () => {
  const [data, setData] = useState([]);
  const [isAdmin, setIsAdmin] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKSERVER_URL}/list`, {
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isAdmin) {
          setIsAdmin(res.isAdmin);
        }
        setData(res.data);
      });
  }, []);

  return (
    <div className="Product">
      <Top />
      <Logo navi={'/'} />
      <TopNav />
      <div className="itemWrapper">
        <div className="navi">
          {isAdmin ? <AdminOption navigate={navigate} /> : null} <ImHome2 />
          <span> {'>'} INTERIOR</span>
        </div>
        <div className="title">INTERIOR({data.length})</div>
        <div className="itemContainer" id="asd">
          {data?.map((item, index) => {
            return (
              <div
                className="itemBox"
                key={index}
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                }}
              >
                <div className="itemImg">
                  <img src={item.url} alt={item.title} />
                </div>
                <div className="itemTitle">{item.title}</div>
                <div className="itemDescription">{item.miniDescription}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="md">
        <img src="/images/detail/logo4.png" alt="interior" />
      </div>
      <TopBottom />
      <Footer />
    </div>
  );
};

const AdminOption = ({ navigate }) => {
  return (
    <span className="adminBox">
      <span
        className="writeButton"
        onClick={() => {
          navigate('/admin/write');
        }}
      >
        Admin Write
      </span>
    </span>
  );
};

export default Product;
