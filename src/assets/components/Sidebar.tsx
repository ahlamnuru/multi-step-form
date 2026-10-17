import { useForm } from "../context/useForm";
import { steps } from "../data/steps";
import bgMobile from "../images/bg-sidebar-mobile.svg";
import bgDesktop from "../images/bg-sidebar-desktop.svg";

function Sidebar() {
  const { state } = useForm();
  const activeStep = Math.min(state.step, 4);

  return (
    <aside className="relative">
      <img src={bgMobile} alt="" className="h-44 w-full object-cover md:hidden" />
      <img src={bgDesktop} alt="" className="hidden md:block md:h-142 md:w-68.5" />

      <ol className="absolute inset-x-0 top-8 flex justify-center gap-4 md:inset-auto md:left-8 md:top-10 md:flex-col md:gap-8">
        {steps.map((step) => (
          <li key={step.number} className="flex items-center gap-4">
            <span
              className={`flex h-8.5 w-8.5 items-center justify-center rounded-full border text-sm font-bold ${
                activeStep === step.number
                  ? "border-blue-200 bg-blue-200 text-blue-950"
                  : "border-white text-white"
              }`}
            >
              {step.number}
            </span>
            <div className="hidden md:block">
              <p className="text-xs uppercase text-blue-200">Step {step.number}</p>
              <p className="text-sm font-bold uppercase tracking-wider text-white">
                {step.title}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export default Sidebar;
