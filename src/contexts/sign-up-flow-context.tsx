"use client";
import React, { createContext, useContext, useState } from "react";

export type SignUpFlowState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type SignUpFlowContextType = {
  state: SignUpFlowState;
  setState: React.Dispatch<React.SetStateAction<SignUpFlowState>>;
  reset: () => void;
};

const SignUpFlowContext = createContext<SignUpFlowContextType | undefined>(undefined);

export const SignUpFlowProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<SignUpFlowState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const reset = () => setState({ firstName: "", lastName: "", email: "", password: "", confirm_password: "" });

  return (
    <SignUpFlowContext.Provider value={{ state, setState, reset }}>
      {children}
    </SignUpFlowContext.Provider>
  );
};

export const useSignUpFlow = () => {
  const context = useContext(SignUpFlowContext);
  if (!context) throw new Error("useSignUpFlow must be used within a SignUpFlowProvider");
  return context;
}; 