import { createSlice } from '@reduxjs/toolkit';
import sushiData from '../shared/sushiData';
import { RootState } from './store';

const sushiSlice = createSlice({
  name: 'sushi',
  initialState: {
    items: sushiData,
  },
  reducers: {
  },
});

export const selectSushi = (state: RootState) => state.sushi.items;

export default sushiSlice.reducer;
