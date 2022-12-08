import { createContext, useContext } from "react";

export interface GioHang {
  gioHang: string[];
  yeuThich: string[];
  setGioHang: (gioHang: string[]) => any;
  setYeuThich: (yeuThich: string[]) => any;
}

export const GioHangContext = createContext<GioHang>({
  gioHang: [],
  yeuThich: [],
  setGioHang: () => { },
  setYeuThich: () => { }
});

export const useGioHangContext = () => useContext(GioHangContext);
