import { useContext } from "react";
import { FormContext } from "./formContext";

export function useForm() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useForm must be used inside FormProvider");
  }

  return context;
}
