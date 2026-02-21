import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepDataState  {
  stepData:  {
        stepDataUpload: {
            fileImg: string;
            color: string;
            glow: string;
            sticker: string;
            config: string;
        };
    };
};

type StepDataKey = keyof StepDataState["stepData"];

type SetStepDataPayload = {
  stepKey: StepDataKey;
  data: StepDataState["stepData"][StepDataKey];
};

const initialStepDataState : StepDataState= {
  stepData: {
     stepDataUpload:{
            fileImg:"",

      color:"",
      glow:"",
      sticker:"",
      config:""
     }
  },
};

export const stepDataSlices = createSlice({
  name: "stepData",
  initialState: initialStepDataState,
  reducers: {
    setStepData: (state, action: PayloadAction<SetStepDataPayload>) => {
      state.stepData[action.payload.stepKey] = action.payload.data;
    },
    resetStepData: (state) => {
      state.stepData.stepDataUpload = {...initialStepDataState.stepData.stepDataUpload};
    },
    setFileImg: (state, action: PayloadAction<string>) => {
      state.stepData.stepDataUpload.fileImg = action.payload;
    },
     setColor: (state, action: PayloadAction<string>) => {
      state.stepData.stepDataUpload.color = action.payload;
    },
     setConfig: (state, action: PayloadAction<string>) => {
      state.stepData.stepDataUpload.config = action.payload;
    },
     setGlow: (state, action: PayloadAction<string>) => {
      state.stepData.stepDataUpload.glow = action.payload;
    },
      setSticker: (state, action: PayloadAction<string>) => {
      state.stepData.stepDataUpload.sticker = action.payload;
    },
  },
});

export const { setStepData, resetStepData ,setColor , setGlow, setConfig,setSticker,setFileImg} = stepDataSlices.actions;
export default stepDataSlices.reducer;