import { useForm } from "../context/useForm";
import Sidebar from "./Sidebar";
import StepInfo from "./StepInfo";
import StepPlan from "./StepPlan";
import StepAddOns from "./StepAddOns";
import StepSummary from "./StepSummary";
import StepThanks from "./StepThanks";
import StepNav from "./StepNav";

function MultiStepForm() {
  const { state } = useForm();

  return (
    <div className="min-h-screen bg-blue-100 pb-24 md:flex md:items-center md:justify-center md:p-4 md:pb-4">
      <div className="md:flex md:w-full md:max-w-235 md:rounded-2xl md:bg-white md:p-4 md:shadow-xl">
        <Sidebar />

        <main className="relative -mt-18 mx-4 rounded-xl bg-white p-6 shadow-lg md:mx-0 md:mt-0 md:flex md:flex-1 md:flex-col md:px-24 md:py-10 md:shadow-none">
          <div className="md:flex-1">
            {state.step === 1 && <StepInfo />}
            {state.step === 2 && <StepPlan />}
            {state.step === 3 && <StepAddOns />}
            {state.step === 4 && <StepSummary />}
            {state.step === 5 && <StepThanks />}
          </div>

          {state.step < 5 && <StepNav />}
        </main>
      </div>
    </div>
  );
}

export default MultiStepForm;
