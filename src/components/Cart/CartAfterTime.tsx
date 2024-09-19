import React, { Fragment, useEffect, useState } from "react";
import Modal from "../UI/Modal";

import classes from "./CartAfterTime.module.scss";
import eatItem from "../../assets/img/schnitzel.jpg";

function CartAfterTime() {
  const [timeCart, setTimeCart] = useState<boolean>(false);

  useEffect(() => {
    const time: number = 0;
    setTimeout(() => {
      setTimeCart(true);
    }, 10000);
    return () => clearTimeout(time);
  }, []);

  const closeHandle = (): void => {
    setTimeCart(false);
  };
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        closeHandle();
      }
    };
    document.addEventListener("keydown", handleEsc) as unknown as void;
    return () => {
      document.removeEventListener("keydown", handleEsc) as unknown as void;
    };
  }, []);
  return (
    <Fragment>
      {timeCart && (
        <Modal onClose={closeHandle}>
          <div className={classes.aftertime}>
            <div className={classes.content}>
              <img src={eatItem} alt="" />
              <p>Schnitzel</p>
            </div>
            <div className={classes.close} onClick={closeHandle}>
              X
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
}

export default CartAfterTime;
