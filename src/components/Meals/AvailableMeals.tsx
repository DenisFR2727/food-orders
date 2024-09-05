import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

export interface IMeal {
  id: number;
  name: string;
  description: string;
  price: number;
}
const DUMMY_MEALS: IMeal[] = [
  {
    id: 1,
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: 3,
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: 4,
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const mealList = (
    <ul>
      {DUMMY_MEALS.map((meal: IMeal, index: number) => (
        <MealItem key={index} item={meal} />
      ))}
    </ul>
  );

  return (
    <section className={classes.meals}>
      <Card>{mealList}</Card>
    </section>
  );
};
export default AvailableMeals;
