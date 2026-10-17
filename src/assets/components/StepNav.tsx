import { useForm } from "../context/useForm";

function StepNav() {
  const { state, dispatch } = useForm();
  const isLastStep = state.step === 4;

  return (
    <div className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-between bg-white p-4 md:static md:mt-auto md:p-0 md:pt-6">
      {state.step > 1 ? (
        <button
          type="button"
          onClick={() => dispatch({ type: "BACK" })}
          className="font-medium text-grey-500 hover:text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Go Back
        </button>
      ) : (
        <span></span>
      )}

      <button
        type="button"
        onClick={() => dispatch({ type: "NEXT" })}
        className={`rounded-lg px-6 py-3 font-medium text-white hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 ${
          isLastStep ? "bg-purple-600" : "bg-blue-950"
        }`}
      >
        {isLastStep ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}

export default StepNav;
