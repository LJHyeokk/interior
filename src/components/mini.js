const TopBottom = () => {
  return (
    <div className="topBottom">
      <span
        className="top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <img src="/images/totop.png" alt="top" />
      </span>
      <span
        className="bottom"
        onClick={() => {
          window.scrollTo({ top: 10000, behavior: 'smooth' });
        }}
      >
        <img src="/images/totop.png" alt="bottom" />
      </span>
    </div>
  );
};

export default TopBottom;
