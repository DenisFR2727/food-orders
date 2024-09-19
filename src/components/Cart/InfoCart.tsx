import React, { Fragment } from "react";
import Modal from "../UI/Modal";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import classes from "./InfoCart.module.scss";
import { showInformation } from "../../reducer/mealsSlice";
import { getShowInformation } from "../../store/selectors";

function InfoCart() {
  const dispatch = useAppDispatch();
  const showInfo = useAppSelector(getShowInformation);

  const closeModalHandler = (): void => {
    dispatch(showInformation(false));
  };
  return (
    <Fragment>
      {showInfo && (
        <Modal onClose={closeModalHandler}>
          <div className={classes.info}>
            <p>Please add item in your cart!</p>
            <div className={classes.close} onClick={closeModalHandler}>
              X
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
}

export default InfoCart;
