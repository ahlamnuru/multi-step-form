import { useForm } from "../context/useForm";
import { plans } from "../data/plans";
import { addOns } from "../data/addOns";
import { formatPrice, getTotal } from "../utils/pricing";
import StepHeading from "./StepHeading";

function StepSummary() {
  const { state, dispatch } = useForm();
  const { billing } = state;

  const plan = plans.find((p) => p.id === state.plan);
  const chosenAddOns = addOns.filter((addOn) => state.addOns.includes(addOn.id));

  if (!plan) {
    return null;
  }

  return (
    <div>
      <StepHeading
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />

      <div className="mt-6 rounded-lg bg-blue-50 p-4 md:mt-8 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-blue-950">
              {plan.name} ({billing === "monthly" ? "Monthly" : "Yearly"})
            </p>
            <button
              type="button"
              onClick={() => dispatch({ type: "GO_TO_STEP", step: 2 })}
              className="text-sm text-grey-500 underline hover:text-purple-600"
            >
              Change
            </button>
          </div>
          <p className="font-bold text-blue-950">
            {formatPrice(plan.price[billing], billing)}
          </p>
        </div>

        {chosenAddOns.length > 0 && (
          <ul className="mt-4 flex flex-col gap-3 border-t border-purple-200 pt-4">
            {chosenAddOns.map((addOn) => (
              <li key={addOn.id} className="flex items-center justify-between text-sm">
                <span className="text-grey-500">{addOn.name}</span>
                <span className="text-blue-950">
                  +{formatPrice(addOn.price[billing], billing)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between px-4 md:px-6">
        <p className="text-sm text-grey-500">
          Total (per {billing === "monthly" ? "month" : "year"})
        </p>
        <p className="text-lg font-bold text-purple-600 md:text-xl">
          {formatPrice(getTotal(state), billing)}
        </p>
      </div>
    </div>
  );
}

export default StepSummary;
