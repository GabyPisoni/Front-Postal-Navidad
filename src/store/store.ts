import  stepDataSlices  from "@/features/stepDataSlices";
import stepperReducer from "@/features/stepperSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		stepData: stepDataSlices,
		stepper: stepperReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 



