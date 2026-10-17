import type { FormErrors, FormState } from "../types";

export function validateStep(state: FormState): FormErrors {
  const errors: FormErrors = {};

  if (state.step === 1) {
    if (state.name.trim() === "") {
      errors.name = "This field is required";
    }

    if (state.email.trim() === "") {
      errors.email = "This field is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      errors.email = "Invalid email address";
    }

    if (state.phone.trim() === "") {
      errors.phone = "This field is required";
    } else if (!/^\+?[\d\s-]{7,15}$/.test(state.phone)) {
      errors.phone = "Invalid phone number";
    }
  }

  if (state.step === 2 && state.plan === null) {
    errors.plan = "Please select a plan";
  }

  return errors;
}
