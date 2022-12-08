import { useGioHangContext } from "../../gioHangContext";

const GioHang = () => {
  const { gioHang, yeuThich, setGioHang, setYeuThich } = useGioHangContext();

  const xoaKhoiGio = (index: number) => {
    setGioHang(gioHang.slice(0, index).concat(gioHang.slice(index + 1)));
  };

  const xoaYeuThich = (index: number) => {
    setYeuThich(yeuThich.slice(0, index).concat(yeuThich.slice(index + 1)));
  };

  return (
    <div>
      <h2>Giỏ hàng</h2>
      {gioHang.map((gh, index) => (
        <div key={index}>
          {gh} <button onClick={() => xoaKhoiGio(index)}>Xoa</button>
        </div>
      ))}

      <br />
      <br />
      <br />
      <h2>Yêu thích</h2>
      {yeuThich.map((gh, index) => (
        <div key={index}>
          {gh} <button onClick={() => xoaYeuThich(index)}>Xoa</button>
        </div>
      ))}
    </div>
  );
};

export default GioHang;
