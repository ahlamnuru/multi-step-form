import type { Plan } from "../types";
import iconArcade from "../images/icon-arcade.svg";
import iconAdvanced from "../images/icon-advanced.svg";
import iconPro from "../images/icon-pro.svg";

export const plans: Plan[] = [
  { id: "arcade", name: "Arcade", icon: iconArcade, price: { monthly: 9, yearly: 90 } },
  { id: "advanced", name: "Advanced", icon: iconAdvanced, price: { monthly: 12, yearly: 120 } },
  { id: "pro", name: "Pro", icon: iconPro, price: { monthly: 15, yearly: 150 } },
];
