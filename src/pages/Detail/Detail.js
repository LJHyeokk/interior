// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Top, Logo } from '../../components/MainTopBottomLogo';
import TopNav from '../../components/TopNav';
import './Detail.scss';

const Detail = () => {
  // const navigate = useNavigate();

  return (
    <div className="Detail">
      <Top />
      <Logo navi={'/'} />
      <TopNav />
    </div>
  );
};

export default Detail;
