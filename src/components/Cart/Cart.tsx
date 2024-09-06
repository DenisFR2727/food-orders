import React, { Fragment, useState } from "react";
import Modal from "../UI/Modal";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import { showCartAction } from "../../reducer/mealsSlice";

function Cart() {
  const dispatch = useAppDispatch();
  const openModal = useAppSelector((state) => state.showCart);
  const meals = useAppSelector((state) => state.meals);
  const hasMeals = meals.length > 0;

  const closeModalHandler = () => {
    dispatch(showCartAction(false));
  };

  return (
    <Fragment>
      {openModal && (
        <Modal onClose={closeModalHandler}>
          {!hasMeals && <p>No meals in your cart</p>}
          <div>Cart</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            quas porro eaque doloribus tempore libero perspiciatis.
            Exercitationem neque modi, voluptas ipsa, accusamus corrupti unde
            temporibus libero, soluta debitis perferendis perspiciatis.
          </p>
        </Modal>
      )}
    </Fragment>
  );
}

export default Cart;
