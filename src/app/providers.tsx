"use client";

import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "@/store/store";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <CssBaseline />
      {children}
    </Provider>
  );
}
