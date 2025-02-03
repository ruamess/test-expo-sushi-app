import { configureStore } from '@reduxjs/toolkit';
import sushiReducer from './sushiSlice';

const store = configureStore({
  reducer: {
    sushi: sushiReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
