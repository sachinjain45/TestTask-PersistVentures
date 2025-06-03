import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PlaneventState {
  selected: {[sectionIdx: number]: string};
  date: string;
}

const initialState: PlaneventState = {
  selected: {},
  date: new Date().toISOString(),
};

const planeventSlice = createSlice({
  name: 'planevent',
  initialState,
  reducers: {
    setSelected(state, action: PayloadAction<{[sectionIdx: number]: string}>) {
      state.selected = action.payload;
    },
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    resetPlanevent() {
      return initialState;
    },
  },
});

export const {setSelected, setDate, resetPlanevent} = planeventSlice.actions;
export default planeventSlice.reducer;
