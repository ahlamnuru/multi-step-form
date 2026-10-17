import { createContext } from "react";
import type { Dispatch } from "react";
import type { FormAction, FormState } from "../types";

type FormContextValue = {
  state: FormState;
  dispatch: Dispatch<FormAction>;
};

export const FormContext = createContext<FormContextValue | null>(null);
