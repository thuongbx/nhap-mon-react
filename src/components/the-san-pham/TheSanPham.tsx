import { useState } from "react";
import { useGioHangContext } from "../../gioHangContext";
import "./TheSanPham.scss";

interface Props {
  ten: string;
  anh: string;
  gia: string;
}

const TheSanPham = ({ ten, anh, gia }: Props) => {
  const { gioHang, yeuThich, setGioHang, setYeuThich } = useGioHangContext();

  const themVaoGioClick = () => {
    setGioHang([...gioHang, ten]);
  };

  const yeuThichClick = () => {
    setYeuThich([...yeuThich, ten]);
  };

  return (
    <div className={"the-san-pham" + (yeuThich ? " the-san-pham--yeu-thich" : "")}>
      <img src={anh} alt="" className="the-san-pham__img" />
      <div className="the-san-pham__list">
        <h3 className="the-san-pham__list-name">{ten}</h3>
        <span className="the-san-pham__list-price">{gia}</span>
        <div>
          <button onClick={themVaoGioClick}>Them vao gio</button>
          <button onClick={yeuThichClick}>Yeu thich</button>
        </div>
      </div>
    </div>
  );
};

export default TheSanPham;
