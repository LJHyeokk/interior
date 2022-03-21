import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './Login.scss';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  function handleIdInput(event) {
    setId(event.target.value);
  }
  function handlePwInput(event) {
    setPw(event.target.value);
  }

  function passwordToText(e) {
    const pwDom = document.getElementsByClassName('pw')[0];
    if (pwDom.type === 'password') {
      pwDom.type = 'text';
      e.target.innerHTML = 'hide';
    } else {
      pwDom.type = 'password';
      e.target.innerHTML = 'show';
    }
  }

  function toChangePage() {
    fetch(`${process.env.REACT_APP_BACKSERVER_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === 'LOGIN_SUCCESS') {
          alert('관리자권한으로 로그인 하셨습니다.');
          localStorage.setItem('token', res.token);
          navigate('/product');
        } else {
          alert('이메일과 비밀번호가 올바르지 않습니다.');
        }
      });
  }

  return (
    <div className="Login">
      <div className="login-logo">
        <img src="/images/main/main.png" alt="logo" />
      </div>
      <form className="login-form">
        <input
          className="id"
          maxLength="50"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          autoComplete="off"
          onChange={handleIdInput}
          style={{ borderColor: id.includes('admin') ? '#d9BAF2' : '#dddddd' }}
        />
        <input
          type="password"
          className="pw"
          maxLength="50"
          placeholder="비밀번호"
          onChange={handlePwInput}
          style={{
            borderColor: pw.length > 5 ? '#d9BAF2' : '#dddddd',
          }}
        />
        <button className="showHide" type="button" onClick={passwordToText}>
          show
        </button>
        <button
          className="toList"
          type="button"
          onClick={toChangePage}
          style={{ backgroundColor: pw.length > 5 ? '#d9BAF2' : '#d4d2e8' }}
        >
          로그인
        </button>
      </form>
      <div className="login-forget">
        <a href="/admin" onClick={() => alert('010-6624-8252 연락바랍니다.')}>
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}

export default Login;
