import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import DanhSachSanPham from "./components/danh-sach-san-pham/DanhSachSanPham";
import { GioHang as GioHangType, GioHangContext } from "./gioHangContext";
import GioHang from "./components/gioHang/GioHang";
import GiaDinh from "./components/giaDinh/GiaDinh";
import TangSo from "./components/tangSo/TangSo";

function App() {
  const [count, setCount] = useState(0);
  const [gioHang, setGioHang] = useState<string[]>([]);
  const [yeuThich, setYeuThich] = useState<string[]>([]);
  const [counter, setCounter] = useState(1);

  const gioHangData: GioHangType = {
    gioHang,
    yeuThich,
    setGioHang,
    setYeuThich,
  };

  return (
    <GioHangContext.Provider value={gioHangData}>
      <Header />
      <main>
        <GioHang />
        <DanhSachSanPham />
        <GiaDinh/>
        <TangSo/>
      </main>
      <Footer />
    </GioHangContext.Provider>
  );
}

export default App;
