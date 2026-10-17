import { useForm } from "../context/useForm";
import { plans } from "../data/plans";
import { formatPrice } from "../utils/pricing";
import StepHeading from "./StepHeading";

function StepPlan() {
  const { state, dispatch } = useForm();
  const isYearly = state.billing === "yearly";

  return (
    <div>
      <StepHeading
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />

      <div className="mt-6 flex flex-col gap-3 md:mt-8 md:flex-row md:gap-4">
        {plans.map((plan) => {
          const selected = state.plan === plan.id;

          return (
            <button
              key={plan.id}
              type="button"
              aria-pressed={selected}
              onClick={() => dispatch({ type: "SET_PLAN", plan: plan.id })}
              className={`flex items-center gap-4 rounded-lg border p-4 text-left hover:border-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 md:flex-1 md:flex-col md:items-start md:gap-10 ${
                selected ? "border-purple-600 bg-blue-50" : "border-purple-200"
              }`}
            >
              <img src={plan.icon} alt="" className="h-10 w-10" />
              <div>
                <p className="font-medium text-blue-950">{plan.name}</p>
                <p className="text-sm text-grey-500">
                  {formatPrice(plan.price[state.billing], state.billing)}
                </p>
                {isYearly && <p className="mt-1 text-xs text-blue-950">2 months free</p>}
              </div>
            </button>
          );
        })}
      </div>

      {state.errors.plan && (
        <p className="mt-4 text-sm font-bold text-red-500">{state.errors.plan}</p>
      )}

      <div className="mt-6 flex items-center justify-center gap-6 rounded-lg bg-blue-50 py-3.5 text-sm font-medium">
        <span className={isYearly ? "text-grey-500" : "text-blue-950"}>Monthly</span>
        <button
          type="button"
          role="switch"
          aria-checked={isYearly}
          aria-label="Yearly billing"
          onClick={() => dispatch({ type: "TOGGLE_BILLING" })}
          className="relative h-5 w-9.5 rounded-full bg-blue-950 hover:bg-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          <span
            className={`absolute top-1 h-3 w-3 rounded-full bg-white transition-all ${
              isYearly ? "left-5.5" : "left-1"
            }`}
          ></span>
        </button>
        <span className={isYearly ? "text-blue-950" : "text-grey-500"}>Yearly</span>
      </div>
    </div>
  );
}

export default StepPlan;
