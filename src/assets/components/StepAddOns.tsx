import { useForm } from "../context/useForm";
import { addOns } from "../data/addOns";
import { formatPrice } from "../utils/pricing";
import StepHeading from "./StepHeading";
import iconCheckmark from "../images/icon-checkmark.svg";

function StepAddOns() {
  const { state, dispatch } = useForm();

  return (
    <div>
      <StepHeading
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />

      <div className="mt-6 flex flex-col gap-3 md:mt-8 md:gap-4">
        {addOns.map((addOn) => {
          const checked = state.addOns.includes(addOn.id);

          return (
            <label
              key={addOn.id}
              className={`flex cursor-pointer items-center gap-4 rounded-lg border p-4 hover:border-purple-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-purple-600 ${
                checked ? "border-purple-600 bg-blue-50" : "border-purple-200"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => dispatch({ type: "TOGGLE_ADDON", addOn: addOn.id })}
                className="sr-only"
              />
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                  checked ? "border-purple-600 bg-purple-600" : "border-purple-200 bg-white"
                }`}
              >
                {checked && <img src={iconCheckmark} alt="" />}
              </span>
              <span className="flex-1">
                <span className="block font-medium text-blue-950">{addOn.name}</span>
                <span className="block text-sm text-grey-500">{addOn.description}</span>
              </span>
              <span className="text-sm text-purple-600">
                +{formatPrice(addOn.price[state.billing], state.billing)}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default StepAddOns;
