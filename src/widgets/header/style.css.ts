import { style } from "@vanilla-extract/css";

export const header = style({
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  borderBottom: "1px solid #eee",
  position: "sticky", // 상단 고정
  top: 0,
  backgroundColor: "#fff",
  zIndex: 100,
});

export const logo = style({
  fontWeight: 700,
  fontSize: "1.2rem",
});

export const menuList = style({
  display: "flex",
  gap: "20px",
});
