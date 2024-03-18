import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { weatherApi } from "./api/weatherApi";
import popupSlice from "./slices/popup/popupSlice";
import loaderSlice from "./slices/loader/loaderSlice";

export const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    loader: loaderSlice.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(weatherApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
