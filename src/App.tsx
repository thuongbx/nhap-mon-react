import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import DanhSachSanPham from "./components/danh-sach-san-pham/DanhSachSanPham";
import { GioHang as GioHangType, GioHangContext } from "./gioHangContext";
import GioHang from "./components/GioHang/GioHang";

function App() {
  const [count, setCount] = useState(0);
  const [gioHang,setGioHang]=useState<string[]>([]);

  const gioHangData:GioHangType={
    gioHang,
    setGioHang
  }

  return (
    <GioHangContext.Provider value={gioHangData}>
      <Header />
      <main>
        <GioHang/>
        <DanhSachSanPham />
      </main>
      <Footer />
    </GioHangContext.Provider>
  );
}

export default App;
