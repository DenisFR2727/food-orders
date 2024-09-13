import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMeal } from "../components/Meals/AvailableMeals";

interface MealState {
  meals: IMeal[];
  showCart: boolean;
  showInformation: boolean;
  totalAmount: number;
}

const initialState: MealState = {
  meals: [],
  showCart: false,
  showInformation: false,
  totalAmount: 0,
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    addMeal: (state, action: PayloadAction<IMeal>) => {
      state.totalAmount += action.payload.price * action.payload.amount!;

      const existingMealIndex = state.meals.findIndex(
        (meal) => meal.id === action.payload.id
      );
      if (existingMealIndex >= 0) {
        state.meals[existingMealIndex].amount! += action.payload.amount!;
      } else {
        state.meals.push(action.payload);
      }
    },
    removeMeal: (state, action: PayloadAction<number>) => {
      const existingMealIndex = state.meals.findIndex(
        (meal) => meal.id === action.payload
      );
      const existingMeal = state.meals[existingMealIndex];
      state.totalAmount -= existingMeal.price;
      if (existingMeal.amount === 1) {
        state.meals = state.meals.filter((meal) => meal.id !== action.payload);
      } else {
        existingMeal.amount! -= 1;
      }
    },
    emptyCart: (state) => {
      state.meals = [];
      state.totalAmount = 0;
    },
    showCartAction: (state, action: PayloadAction<boolean>) => {
      state.showCart = action.payload;
    },
    showInformation: (state, action: PayloadAction<boolean>) => {
      state.showInformation = action.payload;
    },
  },
});
export const {
  addMeal,
  showCartAction,
  removeMeal,
  emptyCart,
  showInformation,
} = mealsSlice.actions;
export default mealsSlice.reducer;
