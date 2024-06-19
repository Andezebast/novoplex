import { configureStore, combineReducers } from "@reduxjs/toolkit";
import GamesReducer from "./games/GamesSlice";

const rootReducer = combineReducers({
  GamesReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
