import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      auth: authSlice,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];