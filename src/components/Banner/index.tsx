import style from "./style.module.scss";

const Banner = () => {
  return (
    <div className={style.bannerSection}>
      <div className={style.infoBlock}>
        <h1 className={style.title}>
          szkółka <br /> pływania
        </h1>
        <div className={style.logo} />
        <h1 className={style.slogan}>
          pływamy <br /> 7 dni <br /> w tygodniu
        </h1>
      </div>
    </div>
  );
};

export default Banner;
