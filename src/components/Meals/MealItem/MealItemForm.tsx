import React from "react";
import classes from "./MealItemForm.module.scss";

function MealItemForm() {
  return (
    <form className={classes.form}>
      <div className={classes.inputAmount}>
        <label htmlFor="amount">Amount</label>
        <input className={classes.counter} type="number" />
      </div>
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
