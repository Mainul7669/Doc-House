import "../Styles/app.css"
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-arrow prev-arrow ${className}`}
      style={style}
      onClick={onClick}
    >
      <i className="fa fa-angle-left fa-2x"></i>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-arrow next-arrow ${className}`}
      style={style}
      onClick={onClick}
    >
      <i className="fa fa-angle-right fa-2x"></i>
    </div>
  );
};

export { CustomPrevArrow, CustomNextArrow };
