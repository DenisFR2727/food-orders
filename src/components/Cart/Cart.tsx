import React, { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import {
  addMeal,
  emptyCart,
  removeMeal,
  showCartAction,
} from "../../reducer/mealsSlice";
import { IMeal } from "../Meals/AvailableMeals";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import classes from "./Cart.module.scss";

function Cart() {
  const dispatch = useAppDispatch();
  const openModal = useAppSelector((state) => state.showCart);
  const meals = useAppSelector((state) => state.meals);
  const amount = useAppSelector((state) => state.totalAmount);
  const hasMeals = meals.length > 0;
  const totalAmount = `${amount.toFixed(2)}`;

  const closeModalHandler = (): void => {
    dispatch(showCartAction(false));
  };
  const onAdd = (meal: IMeal): void => {
    dispatch(addMeal({ ...meal, amount: 1 }));
  };
  const onRemove = (id: any): void => {
    dispatch(removeMeal(id));
  };
  const cartItemEmptyHandler = () => {
    dispatch(emptyCart());
  };
  const cartItems = (
    <ul>
      {meals.map((meal: IMeal) => {
        return (
          <CartItem
            key={meal.id}
            meal={meal}
            onAdd={onAdd.bind(null, meal)}
            onRemove={onRemove.bind(null, meal.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Fragment>
      {openModal && (
        <Modal onClose={closeModalHandler}>
          {!hasMeals && <p>No meals in your cart</p>}
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button
              className={classes["button--alt"]}
              onClick={closeModalHandler}
            >
              Close
            </button>
            {hasMeals && (
              <button
                className={classes["button--empty"]}
                onClick={cartItemEmptyHandler}
              >
                Empty Cart
              </button>
            )}
            {hasMeals && (
              <button className={classes.button} onClick={closeModalHandler}>
                Order
              </button>
            )}
          </div>
        </Modal>
      )}
    </Fragment>
  );
}

export default Cart;
