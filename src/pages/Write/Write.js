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
  const [fileName, setFileName] = useState([]);

  const previewHandler = (e) => {
    const selected = e.target.files;
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/png'];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      setFileName(selected);
    } else {
      console.log('Not Supported File.');
    }
  };

  const postHandler = () => {
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
      // Authorization: sessionStorage.getItem('token'),
    };

    const formData = new FormData();
    formData.append('image', fileName);
    formData.append('title', title);
    formData.append('name', name);
    formData.append('size', size);
    formData.append('location', location);
    formData.append('type', type);
    formData.append('date', date);
    formData.append('miniDescription', miniDescription);
    formData.append('description', description);

    fetch(`http://localhost:8001/product`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      formData,
      body: JSON.stringify({
        title,
        name,
        size,
        location,
        type,
        date,
        miniDescription,
        description,
      }),
    });
    // .then((res) => res.json())
    // .then((res) => {
    //   if (res.message === 'SUCCESS') return navigate('/');
    // }
    // );

    // axios.defaults.headers.post = null;
    // axios
    //   .post(
    //     `http://localhost:8001/product`,
    //     formData,
    //     { headers },
    //     {
    //       onUploadProgress: (progressEvent) => {
    //         console.log(
    //           'Upload Progress: ' +
    //             Math.round((progressEvent.loaded / progressEvent.total) * 100) +
    //             '%'
    //         );
    //       },
    //     }
    //   )
    //   .then(() => navigate('/'));

    return;
  };

  return (
    <div className="Write">
      <div className="uploadBox">
        <div className="title">INTERIOR DETAIL UPLOAD BOX</div>
        <div className="imgUploadBox">
          <div className="uploadImg">
            <span>Add Images</span>
            <input
              id="input-file"
              type="file"
              multiple="multiple"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              onChange={previewHandler}
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
          <button className="saveButton" onClick={postHandler}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;
