import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header/Header";

export const MainLayout = () => {
  return (
    <div>
      <Header /> {/* 헤더는 고정 */}
      <main>
        <Outlet /> {/* 여기에 각 페이지(MainPage 등)가 렌더링됨 */}
      </main>
    </div>
  );
};
