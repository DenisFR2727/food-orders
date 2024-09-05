import React from "react";
import { IMeal } from "../AvailableMeals";
import classes from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";

interface MealProps {
  item: IMeal;
}
function MealItem(props: MealProps) {
  const { name, description, price } = props.item;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div className={classes.form}>
        <MealItemForm />
      </div>
    </li>
  );
}

export default MealItem;
