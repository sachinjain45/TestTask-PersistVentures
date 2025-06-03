import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PricingState {
  guests: number;
  chargeGuests: 'no' | 'yes';
  tier: 'basic' | 'premium' | 'elite';
}

const initialState: PricingState = {
  guests: 20,
  chargeGuests: 'no',
  tier: 'premium',
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    setGuests(state, action: PayloadAction<number>) {
      state.guests = action.payload;
    },
    setChargeGuests(state, action: PayloadAction<'no' | 'yes'>) {
      state.chargeGuests = action.payload;
    },
    setTier(state, action: PayloadAction<'basic' | 'premium' | 'elite'>) {
      state.tier = action.payload;
    },
    resetPricing() {
      return initialState;
    },
  },
});

export const {setGuests, setChargeGuests, setTier, resetPricing} = pricingSlice.actions;
export default pricingSlice.reducer;
