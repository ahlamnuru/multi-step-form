import type { AddOn } from "../types";

export const addOns: AddOn[] = [
  {
    id: "online",
    name: "Online service",
    description: "Access to multiplayer games",
    price: { monthly: 1, yearly: 10 },
  },
  {
    id: "storage",
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: { monthly: 2, yearly: 20 },
  },
  {
    id: "profile",
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: { monthly: 2, yearly: 20 },
  },
];
