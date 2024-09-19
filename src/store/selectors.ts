import { createSelector } from "reselect";
import { RootState } from "../store/store";

const selectShowCart = (state: RootState) => state.showCart;
const selectMeals = (state: RootState) => state.meals;
const selectTotalAmount = (state: RootState) => state.totalAmount;
const selectShowInformation = (state: RootState) => state.showInformation;

// Мемоізовані селектори
export const getShowCart = createSelector(
  [selectShowCart],
  (showCart) => showCart
);
export const getMeals = createSelector([selectMeals], (meals) => meals);
export const getTotalAmount = createSelector(
  [selectTotalAmount],
  (totalAmount) => totalAmount
);
export const getShowInformation = createSelector(
  [selectShowInformation],
  (showInformation) => showInformation
);
