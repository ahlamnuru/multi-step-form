import { useForm } from "../context/useForm";
import StepHeading from "./StepHeading";
import Field from "./Field";

function StepInfo() {
  const { state, dispatch } = useForm();

  return (
    <div>
      <StepHeading
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />

      <div className="mt-6 flex flex-col gap-4 md:mt-8 md:gap-6">
        <Field
          id="name"
          label="Name"
          type="text"
          placeholder="e.g. Stephen King"
          value={state.name}
          error={state.errors.name}
          onChange={(value) => dispatch({ type: "SET_FIELD", field: "name", value })}
        />
        <Field
          id="email"
          label="Email Address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          value={state.email}
          error={state.errors.email}
          onChange={(value) => dispatch({ type: "SET_FIELD", field: "email", value })}
        />
        <Field
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="e.g. +1 234 567 890"
          value={state.phone}
          error={state.errors.phone}
          onChange={(value) => dispatch({ type: "SET_FIELD", field: "phone", value })}
        />
      </div>
    </div>
  );
}

export default StepInfo;
