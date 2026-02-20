import { header, logo, menuList } from "./style.css";

export const Header = () => {
  return (
    <header className={header}>
      <div className={logo}>My Web</div>
      <nav>
        <ul className={menuList}>
          <li>홈</li>
          <li>서비스</li>
        </ul>
      </nav>
    </header>
  );
};
