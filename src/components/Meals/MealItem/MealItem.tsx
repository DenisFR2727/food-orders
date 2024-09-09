import { IMeal } from "../AvailableMeals";
import classes from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";

interface MealProps {
  meal: IMeal;
}
function MealItem({ meal }: MealProps) {
  const { name, description, price } = meal;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div className={classes.form}>
        <MealItemForm meal={meal} />
      </div>
    </li>
  );
}

export default MealItem;
