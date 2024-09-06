import { configureStore } from "@reduxjs/toolkit";
import mealsSlice from "../reducer/mealsSlice";
const store = configureStore({
  reducer: mealsSlice,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
