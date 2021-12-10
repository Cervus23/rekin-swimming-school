import style from "./style.module.scss";

const Header = () => {
  return (
    <div className={style.headerSection}>
      <div className={style.logoContainer}>
        <div className={style.logoImg} />
        <div className={style.logoName} />
      </div>
      <nav className={style.navMenu}>
        <ul className={style.menuList}>
          <li className={style.menuItem}>home</li>
          <li className={style.menuItem}>about</li>
          <li className={style.menuItem}>news</li>
          <li className={style.menuItem}>photos</li>
          <li className={style.menuItem}>contacts</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
