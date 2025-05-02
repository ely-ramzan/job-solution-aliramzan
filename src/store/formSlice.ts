import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormData {
  step1: { name: string; email: string };
  step2: { age: number; gender: string };
  step3: { termsAccepted: boolean };
}

const initialState: FormData = {
  step1: { name: '', email: '' },
  step2: { age: 0, gender: '' },
  step3: { termsAccepted: false },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStep1: (state, action: PayloadAction<FormData['step1']>) => {
      state.step1 = action.payload;
    },
    setStep2: (state, action: PayloadAction<FormData['step2']>) => {
      state.step2 = action.payload;
    },
    setStep3: (state, action: PayloadAction<FormData['step3']>) => {
      state.step3 = action.payload;
    },
  },
});

export const { setStep1, setStep2, setStep3 } = formSlice.actions;
export default formSlice.reducer;
