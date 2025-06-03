import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface EventBrandingFields {
  eventTitle: string;
  eventLink: string;
  hostName: string;
}

const initialState: EventBrandingFields = {
  eventTitle: '',
  eventLink: '',
  hostName: '',
};

const eventBrandingSlice = createSlice({
  name: 'eventBranding',
  initialState,
  reducers: {
    setEventBrandingFields(state, action: PayloadAction<Partial<EventBrandingFields>>) {
      return {...state, ...action.payload};
    },
    resetEventBrandingFields() {
      return initialState;
    },
  },
});

export const {setEventBrandingFields, resetEventBrandingFields} = eventBrandingSlice.actions;
export default eventBrandingSlice.reducer;
