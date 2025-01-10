"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

interface PropType {
  children: React.ReactNode;
}

const App = ({ children }: PropType) => {
  return <Provider store={store}>{children}</Provider>;
};

export default App;
