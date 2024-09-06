import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMeal } from "../components/Meals/AvailableMeals";

interface MealState {
  meals: IMeal[];
  showCart: boolean;
}

const initialState: MealState = {
  meals: [],
  showCart: false,
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    addMeal: (state, action: PayloadAction<IMeal>) => {
      const existingMealIndex = state.meals.findIndex(
        (meal) => meal.id === action.payload.id
      );
      if (existingMealIndex >= 0) {
        state.meals[existingMealIndex].amount! += action.payload.amount!;
      } else {
        state.meals.push(action.payload);
      }
    },
    showCartAction: (state, action: PayloadAction<boolean>) => {
      state.showCart = action.payload;
    },
  },
});
export const { addMeal, showCartAction } = mealsSlice.actions;
export default mealsSlice.reducer;
