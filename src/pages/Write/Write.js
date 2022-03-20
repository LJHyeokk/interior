import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Write.scss';

const Write = () => {
  const navigate = useNavigate();
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
    for (let i = 0; i < file.length; i++) {
      formData.append('images', file[i]);
    }
    await axios({
      method: 'POST',
      url: `http://localhost:8001/upload`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    }).then(() => {
      // navigate('/');
    });
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
          <div className="title">INTERIOR DETAIL UPLOAD BOX</div>
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
                    placeholder="ex) Luxury kitchen"
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="ex) 15평"
                    onChange={(e) => setSize(e.target.value)}
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="ex) 부산광역시 OO구 OO동"
                    onChange={(e) => setLocation(e.target.value)}
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
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
                    placeholder="ex) Luxury kitchen"
                    onChange={(e) => setTitle(e.target.value)}
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="ex) 주방 인테리어"
                    onChange={(e) => setType(e.target.value)}
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="ex) 완공"
                    onChange={(e) => setStatus(e.target.value)}
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="ex) 2022-03-18"
                    onChange={(e) => setDate(e.target.value)}
                  ></input>
                </li>
              </ul>
            </div>
          </div>
          <textarea
            placeholder="상세설명을 적어주세요."
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

export default Write;
