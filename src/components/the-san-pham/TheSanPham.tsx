import "./TheSanPham.scss";

interface Props {
  ten: string;
  anh: string;
  gia: string;
}

const TheSanPham = ({ ten, anh, gia }: Props) => {
  return (
    <div className="the-san-pham">
      <img src={anh} alt="" className="the-san-pham__img" />
      <div className="the-san-pham__list">
        <h3 className="the-san-pham__list-name">{ten}</h3>
        <span className="the-san-pham__list-price">{gia}</span>
      </div>
    </div>
  );
};

export default TheSanPham;
