export type PlanId = "arcade" | "advanced" | "pro";

export type AddOnId = "online" | "storage" | "profile";

export type Billing = "monthly" | "yearly";

export type Price = {
  monthly: number;
  yearly: number;
};

export type Plan = {
  id: PlanId;
  name: string;
  icon: string;
  price: Price;
};

export type AddOn = {
  id: AddOnId;
  name: string;
  description: string;
  price: Price;
};

export type InfoField = "name" | "email" | "phone";

export type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  plan?: string;
};

export type FormState = {
  step: number;
  name: string;
  email: string;
  phone: string;
  plan: PlanId | null;
  billing: Billing;
  addOns: AddOnId[];
  errors: FormErrors;
};

export type FormAction =
  | { type: "SET_FIELD"; field: InfoField; value: string }
  | { type: "SET_PLAN"; plan: PlanId }
  | { type: "TOGGLE_BILLING" }
  | { type: "TOGGLE_ADDON"; addOn: AddOnId }
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "GO_TO_STEP"; step: number };
