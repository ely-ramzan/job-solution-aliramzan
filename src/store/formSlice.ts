import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
  step1: {
    firstName: string;
    lastName: string;
    email: string;
  };
  step2: {
    address: string;
    city: string;
    country: string;
  };
  step3: {
    occupation: string;
    education: string;
    skills: string[];
  };
  currentStep: number;
}

const initialState: FormState = {
  step1: {
    firstName: '',
    lastName: '',
    email: '',
  },
  step2: {
    address: '',
    city: '',
    country: '',
  },
  step3: {
    occupation: '',
    education: '',
    skills: [],
  },
  currentStep: 1,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateStep1: (state, action: PayloadAction<FormState['step1']>) => {
      state.step1 = action.payload;
    },
    updateStep2: (state, action: PayloadAction<FormState['step2']>) => {
      state.step2 = action.payload;
    },
    updateStep3: (state, action: PayloadAction<FormState['step3']>) => {
      state.step3 = action.payload;
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { updateStep1, updateStep2, updateStep3, setCurrentStep, resetForm } = formSlice.actions;

export default formSlice.reducer;