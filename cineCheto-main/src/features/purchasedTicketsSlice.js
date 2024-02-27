import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const purchasedTicketsSlice = createSlice({
  name: 'purchasedTickets',
  initialState,
  reducers: {
    addTicket(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addTicket } = purchasedTicketsSlice.actions;
export default purchasedTicketsSlice.reducer;
