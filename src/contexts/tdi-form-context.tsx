"use client";
import { TdiPayload } from "@/types/auth-types";
import React, { createContext, useContext, useState } from "react";

export type TdiFormContextType = {
  state: TdiPayload;
  setState: React.Dispatch<React.SetStateAction<TdiPayload>>;
  reset: () => void;
};

const TdiFormContext = createContext<TdiFormContextType | undefined>(
  undefined
);

export const TdiFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<TdiPayload>({
    passport_issue_date: "",
    password_expiry_date: "",
    visa_no: "",
    visa_type: "",
    visa_issue_date: "",
    visa_expiry_date: "",
    full_name: "",
    dob: "",
    nationality: "",
    gender: "",
    emergency_contact_info: "",
    blood_group: "",
    address: "",
    passport_no: "",
    passport: null,
    email: "",
    marital_status: "",
    embassy_contact: "",
  });

  const reset = () =>
    setState({
      passport_issue_date: "",
      password_expiry_date: "",
      visa_no: "",
      visa_type: "",
      visa_issue_date: "",
      visa_expiry_date: "",
      full_name: "",
      dob: "",
      nationality: "",
      gender: "",
      emergency_contact_info: "",
      blood_group: "",
      address: "",
      passport_no: "",
      passport: null,
      email: "",
      marital_status: "",
      embassy_contact: "",
    });

  return (
    <TdiFormContext.Provider value={{ state, setState, reset }}>
      {children}
    </TdiFormContext.Provider>
  );
};

export const useTdiForm = () => {
  const context = useContext(TdiFormContext);
  if (!context)
    throw new Error("useTdiForm must be used within a TdiFormProvider");
  return context;
};
