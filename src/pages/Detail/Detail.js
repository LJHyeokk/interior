import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Top, Logo } from '../../components/MainTopBottomLogo';
import TopNav from '../../components/TopNav';
import { ImHome2 } from 'react-icons/im';
import './Detail.scss';

const Detail = () => {
  const [data, setData] = useState([]);
  const [img, setImg] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKSERVER_URL}/detail/${params.detail}`, {
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
        setData(...res.data);
        setImg(...res.data);
      });
  }, []);

  const mainImg = () => {
    let mainImg;
    img?.img.forEach((item) => {
      if (item.is_main === 1) {
        mainImg = item.url;
      }
    });
    return mainImg;
  };

  const requestDelete = () => {
    fetch(
      `${process.env.REACT_APP_BACKSERVER_URL}/uploadDelete/${params.detail}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
          boardId: params.detail,
        },
      }
    ).then((res) => {
      if (res.status === 204) {
        alert('삭제 성공');
        navigate('/product');
      } else {
        alert('삭제 실패');
      }
    });
  };

  const requestEdit = () => {
    navigate(`/admin/write/${params.detail}`);
  };

  return (
    <div className="Detail">
      <Top />
      <Logo navi={'/'} />
      <TopNav />
      <div className="itemWrapper">
        <div className="navi">
          {isAdmin ? (
            <AdminOption
              requestEdit={requestEdit}
              requestDelete={requestDelete}
            />
          ) : null}
          <ImHome2 />
          <span>
            {'>'} INTERIOR {'>'} Detail
          </span>
        </div>
        <div className="itemInfo">
          <div className="itemMainImg">
            <img src={mainImg()} alt={data?.title} />
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
              <div className="listImgBox" key={index}>
                <img src={item.url} alt={item.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const AdminOption = ({ requestEdit, requestDelete }) => {
  return (
    <span className="adminBox">
      <span
        className="editButton"
        onClick={() => {
          requestEdit();
        }}
      >
        EDIT
      </span>
      <span
        className="deleteButton"
        onClick={() => {
          requestDelete();
        }}
      >
        DELETE
      </span>
    </span>
  );
};

export default Detail;
