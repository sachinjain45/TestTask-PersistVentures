import {configureStore} from '@reduxjs/toolkit';
import eventBrandingReducer from './reducers/eventBrandingSlice';
import planeventReducer from './reducers/planeventSlice';
import questionsReducer from './reducers/questionsSlice';
import pricingReducer from './reducers/pricingSlice';

export const store = configureStore({
  reducer: {
    eventBranding: eventBrandingReducer,
    planevent: planeventReducer,
    questions: questionsReducer,
    pricing: pricingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
