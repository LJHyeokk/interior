import React, { useState, useEffect } from 'react';
import { Top, Bottom, Logo } from '../../components/MainTopBottomLogo';
import './Main.scss';

const Main = () => {
  const [imgList, setImgList] = useState([]);
  const [originalImg, setOriginalImg] = useState([]);
  const [moving, setMoving] = useState(false);
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);

  useEffect(() => {
    fetch('/data/imgSlide.json')
      .then((res) => res.json())
      .then((res) => {
        const newImg = [...res, ...res];
        setImgList(newImg);
        setX(-(parseInt(newImg.length / 2, 10) * 100));
        setOriginalImg(res.url);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (moving) return;
      setCount(count + 1);
      setX((prevX) => prevX - 100);
      setMoving(true);
      setTimeout(() => {
        const lastImg = imgList.shift();
        setImgList([...imgList, lastImg]);
        setX((prevX) => prevX + 100);
        setMoving(false);
      }, 1000);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="Main">
      <Top />
      <div className="imgWrapper">
        <Logo navi={'/product'} />
        <Slide
          x={x}
          setX={setX}
          imgList={imgList}
          setImgList={setImgList}
          originalImg={originalImg}
        />
      </div>
      <Bottom />
    </div>
  );
};

const Slide = ({ imgList, x }) => {
  return (
    <>
      <div className="imgSlide">
        {imgList?.map((item, index) => {
          return (
            <div
              className="slideList"
              key={`${item.id}${index}`}
              style={{ transform: `translateY(${x}vh)` }}
            >
              <img src={item.url} key={item.id} alt="main" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
