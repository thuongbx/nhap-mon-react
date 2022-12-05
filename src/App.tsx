import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import DanhSachSanPham from "./components/danh-sach-san-pham/DanhSachSanPham";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <DanhSachSanPham />
      </main>
      <Footer />
    </>
  );
}

export default App;
