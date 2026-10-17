import { useReducer } from "react";
import type { ReactNode } from "react";
import { FormContext } from "./formContext";
import { formReducer, initialState } from "../utils/formReducer";

type FormProviderProps = {
  children: ReactNode;
};

function FormProvider({ children }: FormProviderProps) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
