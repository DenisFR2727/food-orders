import { Fragment, useCallback, useMemo } from "react";
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
import { getMeals, getShowCart, getTotalAmount } from "../../store/selectors";

import classes from "./Cart.module.scss";

function Cart() {
  const dispatch = useAppDispatch();
  const openModal = useAppSelector(getShowCart);
  const meals = useAppSelector(getMeals);
  const amount = useAppSelector(getTotalAmount);

  const hasMeals: boolean = meals.length > 0;
  const totalAmount: string = `${amount.toFixed(2)}`;
  console.log("render  9999");
  const closeModalHandler = (): void => {
    dispatch(showCartAction(false));
  };
  const onAdd = useCallback(
    (meal: IMeal): void => {
      dispatch(addMeal({ ...meal, amount: 1 }));
    },
    [dispatch]
  );
  const onRemove = useCallback(
    (id: number): void => {
      dispatch(removeMeal(id));
    },
    [dispatch]
  );
  const cartItemEmptyHandler = (): void => {
    dispatch(emptyCart());
  };

  const cartItems = useMemo(
    () => (
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
    ),
    [meals, onAdd, onRemove]
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
