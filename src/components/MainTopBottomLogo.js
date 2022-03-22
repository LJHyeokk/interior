import { useNavigate } from 'react-router-dom';

const Top = () => {
  return <div className="top">미공의 장 / MIGONG && INTERIOR DESIGIN </div>;
};

const Bottom = () => {
  return <div className="bottom">공간에 아름다움을.</div>;
};

const Logo = ({ navi }) => {
  const navigate = useNavigate();
  return (
    <div
      className="logo"
      onClick={() => {
        navigate(`${navi}`);
      }}
    >
      <img src="/images/main/main.png" alt="logo" />
    </div>
  );
};

export { Top, Bottom, Logo };
