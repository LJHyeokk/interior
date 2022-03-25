import { Top, Logo } from '../../components/MainTopBottomLogo';
import TopNav from '../../components/TopNav';
import { ImHome2 } from 'react-icons/im';
import './Counseling.scss';

const Counseling = () => {
  return (
    <div className="Counseling">
      <Top />
      <Logo navi={'/'} />
      <TopNav />
      <div className="itemWrapper">
        <div className="navi">
          <ImHome2 />
          <span>
            {'>'} INTERIOR {'>'} Detail
          </span>
        </div>
      </div>
    </div>
  );
};

export default Counseling;
