import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StepperState = {
  currentStep: number;
};

const initialStepperState: StepperState = {
  currentStep: 0,
};

const stepperSlice = createSlice({
  name: "currentStep",
  initialState: initialStepperState,
  reducers: {
    nextStep: (state) => {
      if (state.currentStep === 2) return;
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep = Math.max(0, state.currentStep - 1);
    },
    goToStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    resetStep: (state) => {
      state.currentStep = 0;
    },
  },
});

export const { nextStep, prevStep, goToStep, resetStep } = stepperSlice.actions;

export default stepperSlice.reducer;
