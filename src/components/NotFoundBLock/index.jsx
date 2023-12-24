import React from "react";
import Styles from "./NotFoundBlock.module.scss";
export const NotFoundBlock = () => {
  return (
    <div className={Styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено:c
      </h1>
      <p className={Styles.discription}>
        К сожалению данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};
export default NotFoundBlock;
