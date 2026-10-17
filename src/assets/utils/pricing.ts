import type { Billing, FormState } from "../types";
import { plans } from "../data/plans";
import { addOns } from "../data/addOns";

export function formatPrice(amount: number, billing: Billing): string {
  return `$${amount}/${billing === "monthly" ? "mo" : "yr"}`;
}

export function getTotal(state: FormState): number {
  const plan = plans.find((p) => p.id === state.plan);
  const planPrice = plan ? plan.price[state.billing] : 0;

  const addOnsPrice = addOns
    .filter((addOn) => state.addOns.includes(addOn.id))
    .reduce((sum, addOn) => sum + addOn.price[state.billing], 0);

  return planPrice + addOnsPrice;
}
