// import { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "@/widgets/main-layout/MainLayout";
import Main from "@/pages/main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // 전체를 레이아웃으로 감쌈
    children: [
      {
        index: true, // "/" 경로일 때
        element: <Navigate to="/main" replace />,
      },
      {
        path: "main", // "/main" 경로일 때
        element: <Main />,
      },
      // 다른 페이지들도 여기에 추가하면 헤더가 자동으로 붙음
    ],
  },
]);

const RouterData = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
    // </Suspense>
  );
};

export default RouterData;
