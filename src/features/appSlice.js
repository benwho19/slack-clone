import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
  },
  reducers: {
    enterChannel: (state, action) => {
      state.channelId = action.payload.channelId;
    },
  },
});

export const { enterChannel } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectChannelId = state => state.app.channelId;

export default appSlice.reducer;
