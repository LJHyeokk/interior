import { useNavigate } from 'react-router-dom';

const TopNav = () => {
  const navigate = useNavigate();

  return (
    <div className="TopNav">
      <ul>
        <li
          onClick={() => {
            navigate(`/`);
          }}
        >
          미공의장 소개{' '}
        </li>
        <li
          onClick={() => {
            navigate(`/product`);
          }}
        >
          INTERIOR
        </li>
        <li
          onClick={() => {
            navigate(`/`);
          }}
        >
          EVENT & NEWS
        </li>
        <li
          onClick={() => {
            navigate(`/`);
          }}
        >
          상담문의
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
