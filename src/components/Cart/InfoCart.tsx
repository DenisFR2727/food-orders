import React, { Fragment } from "react";
import Modal from "../UI/Modal";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import classes from "./InfoCart.module.scss";
import { showInformation } from "../../reducer/mealsSlice";

function InfoCart() {
  const dispatch = useAppDispatch();
  const showInfo = useAppSelector((state) => state.showInformation);

  const closeModalHandler = (): void => {
    dispatch(showInformation(false));
  };
  return (
    <Fragment>
      {showInfo && (
        <Modal onClose={closeModalHandler}>
          <div className={classes.info}>Please add item in your cart!</div>
        </Modal>
      )}
    </Fragment>
  );
}

export default InfoCart;
