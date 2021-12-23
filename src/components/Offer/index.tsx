import { pool, diving, swimface } from "../../img/exports";
import style from "./style.module.scss";

const offerItems = [
  {
    text: "oswajanie się z wodą",
    img: pool,
  },
  {
    text: "nauka pływania od podstaw",
    img: diving,
  },
  {
    text: "nauka i doskonalenia sportowych technik pływackich",
    img: swimface,
  },
];

const Offer = () => {
  return (
    <div className={style.offerSection}>
      <h2 className={style.title}>oferujemu</h2>
      <div className={style.offerContainer}>
        {offerItems.map((item) => (
          <div className={style.offerItem}>
            <img className={style.offerImg} src={item.img} alt="offer" />
            <p className={style.offerText}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
