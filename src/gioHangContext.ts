import { createContext, useContext } from "react";

export interface GioHang {
  gioHang: string[];
  setGioHang: (gioHang: string[]) => any;
}

export const GioHangContext = createContext<GioHang>({
  gioHang: [],
  setGioHang: () => {},
});

export const useGioHangContext = () => useContext(GioHangContext);
