import { useGioHangContext } from "../../gioHangContext";

const GioHang=()=>{
    const {gioHang,setGioHang}=useGioHangContext();

    const xoaKhoiGio=(index:number)=> {
        setGioHang(gioHang.slice(0,index).concat(gioHang.slice(index+1)));
    }

    return <div>
        {gioHang.map((gh,index)=> <div key={index}>{gh} <button onClick={()=>xoaKhoiGio(index)}>Xoa</button></div>)}
    </div>
}

export default GioHang;