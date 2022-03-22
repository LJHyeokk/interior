import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Edit.scss';

const Edit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [miniDescription, setMiniDescription] = useState('');
  const [file, setFile] = useState([]);
  const [data, setData] = useState([]);
  const [img, setImg] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKSERVER_URL}/detail/${params.id}`, {
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(...res.data);
        setImg(...res.data);
      });
  }, []);

  useEffect(() => {
    setTitle(data?.title);
    setName(data?.name);
    setSize(data?.size);
    setLocation(data?.location);
    setType(data?.type);
    setStatus(data?.status);
    setDate(data?.date);
    setDescription(data?.description);
    setMiniDescription(data?.miniDescription);
  }, [data]);

  const onSubmit = async (e) => {
    e.preventDefault();

    let dataInfo = {
      title,
      name,
      size,
      location,
      type,
      status,
      date,
      description,
      miniDescription,
    };

    const formData = new FormData();
    formData.append('data', JSON.stringify(dataInfo));

    if (!!file[0]) {
      for (let i = 0; i < file.length; i++) {
        formData.append('images', file[i]);
      }

      await axios({
        method: 'PUT',
        url: `${process.env.REACT_APP_BACKSERVER_URL}/uploadEdit/${params.id}`,
        headers: {
          'Content-Type': 'multipart/form-data',
          token: localStorage.getItem('token'),
        },
        data: formData,
      })
        .then((response) => {
          if (response.data.message === 'SUCCESS EDIT') {
            alert('편집 완료');
            navigate('/product');
          } else {
            alert(response.data.message);
          }
        })
        .catch(function (error) {
          alert('TOKEN 기간만료 : 재로그인 해주세요.');
        });
    } else {
      alert('이미지를 넣어주세요');
    }
  };

  const selectImg = (e) => {
    const imgList = e.target.files;
    if (imgList) {
      setFile(imgList);
    }
  };

  return (
    <div className="Write">
      <div className="uploadBox">
        <form onSubmit={onSubmit}>
          <div className="title">INTERIOR DETAIL 'EDIT' BOX</div>
          <div className="imgUploadBox">
            <div className="uploadImg">
              <span>Add Images</span>
              <input
                id="images"
                type="file"
                multiple="multiple"
                name="images"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                onChange={selectImg}
              />
              <span
                style={{
                  marginTop: '30px',
                  letterSpacing: '2px',
                  color: 'red',
                }}
              >
                *주의* 이미지파일을 다시 넣어주셔야 합니다.
              </span>
            </div>
            <div className="uploadInfo">
              <ul>
                <li>NAME</li>
                <li>SIZE</li>
                <li>LOCATION</li>
                <li>miniDescription</li>
              </ul>
              <ul>
                <li>
                  <input
                    type="text"
                    maxLength={15}
                    placeholder="ex) Luxury kitchen"
                    value={name || ''}
                    onChange={(e) => {
                      console.log(e.target.value.length);
                      setName(e.target.value);
                    }}
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    maxLength={15}
                    placeholder="ex) 15평"
                    value={size || ''}
                    onChange={(e) => setSize(e.target.value)}
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    maxLength={15}
                    placeholder="ex) 부산광역시 OO구 OO동"
                    value={location || ''}
                    onChange={(e) => setLocation(e.target.value)}
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    maxLength={80}
                    value={miniDescription || ''}
                    placeholder="ex) 짧은 동선과 실용적인 수납공간"
                    onChange={(e) => setMiniDescription(e.target.value)}
                  ></input>
                </li>
              </ul>
              <ul>
                <li>TITLE</li>
                <li>TYPE</li>
                <li>STATUS</li>
                <li>DATE</li>
              </ul>
              <ul>
                <li>
                  <input
                    type="text"
                    maxLength={15}
                    placeholder="ex) Luxury kitchen"
                    value={title || ''}
                    onChange={(e) => setTitle(e.target.value)}
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    maxLength={15}
                    placeholder="ex) 주방 인테리어"
                    value={type || ''}
                    onChange={(e) => setType(e.target.value)}
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    maxLength={15}
                    placeholder="ex) 완공"
                    value={status || ''}
                    onChange={(e) => setStatus(e.target.value)}
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    maxLength={15}
                    placeholder="ex) 1522-03-18"
                    value={date || ''}
                    onChange={(e) => setDate(e.target.value)}
                  ></input>
                </li>
              </ul>
            </div>
          </div>
          <textarea
            placeholder="상세설명을 적어주세요."
            value={description || ''}
            maxLength={300}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <div className="submit">
            <button type="submit" className="saveButton">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
