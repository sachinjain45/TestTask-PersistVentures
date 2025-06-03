import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface QuestionsState {
  tabs: number[];
  selected: string[];
}

const initialState: QuestionsState = {
  tabs: [],
  selected: [],
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setTabs(state, action: PayloadAction<number[]>) {
      state.tabs = action.payload;
    },
    setSelected(state, action: PayloadAction<string[]>) {
      state.selected = action.payload;
    },
    resetQuestions() {
      return initialState;
    },
  },
});

export const {setTabs, setSelected, resetQuestions} = questionsSlice.actions;
export default questionsSlice.reducer;
