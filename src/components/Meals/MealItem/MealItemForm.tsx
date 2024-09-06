import React, { useState } from "react";
import classes from "./MealItemForm.module.scss";
import { useAppDispatch } from "../../../reducer/hooks";
import { addMeal } from "../../../reducer/mealsSlice";
import { IMeal } from "../AvailableMeals";

interface MealItemFormProps {
  meal: IMeal;
}

function MealItemForm({ meal }: MealItemFormProps) {
  const [amount, setAmount] = useState(1);
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const mealWithAmount: IMeal = { ...meal, amount };
    dispatch(addMeal(mealWithAmount));
    console.log(amount);
  };
  const changeCounter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.inputAmount}>
        <label htmlFor="amount">Amount</label>
        <input
          className={classes.counter}
          onChange={changeCounter}
          defaultValue={amount}
          type="number"
        />
      </div>
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
