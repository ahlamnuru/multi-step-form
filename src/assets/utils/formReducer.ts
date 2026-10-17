import type { FormAction, FormState } from "../types";
import { validateStep } from "./validateStep";

export const initialState: FormState = {
  step: 1,
  name: "",
  email: "",
  phone: "",
  plan: null,
  billing: "monthly",
  addOns: [],
  errors: {},
};

export function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: undefined },
      };

    case "SET_PLAN":
      return {
        ...state,
        plan: action.plan,
        errors: { ...state.errors, plan: undefined },
      };

    case "TOGGLE_BILLING":
      return {
        ...state,
        billing: state.billing === "monthly" ? "yearly" : "monthly",
      };

    case "TOGGLE_ADDON":
      return {
        ...state,
        addOns: state.addOns.includes(action.addOn)
          ? state.addOns.filter((id) => id !== action.addOn)
          : [...state.addOns, action.addOn],
      };

    case "NEXT": {
      const errors = validateStep(state);

      if (Object.keys(errors).length > 0) {
        return { ...state, errors };
      }

      return { ...state, step: state.step + 1, errors: {} };
    }

    case "BACK":
      return { ...state, step: state.step - 1, errors: {} };

    case "GO_TO_STEP":
      return { ...state, step: action.step, errors: {} };

    default:
      return state;
  }
}
