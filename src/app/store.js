import { configureStore } from '@reduxjs/toolkit';
// import menusReducer, { getMenus } from '../features/menu/menuSlice';
import cartReducer, { getTotals } from '../features/cart/cartSlice';
import { menusApi } from '../features/menu/menuServices';

export const store = configureStore({
  reducer: {
    // menus: menusReducer,
    cart: cartReducer,
    [menusApi.reducerPath]: menusApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menusApi.middleware),
});

// store.dispatch(getMenus());
store.dispatch(getTotals());
