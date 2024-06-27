import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    name: '',
    phone: '',
  },
  reducers: {
    changeFilter(state, action) {
      const { name, phone } = action.payload;
      if (name !== undefined) state.name = name;
      if (phone !== undefined) state.phone = phone;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
