import FormProvider from "../context/FormProvider";
import MultiStepForm from "../components/MultiStepForm";

function App() {
  return (
    <FormProvider>
      <MultiStepForm />
    </FormProvider>
  );
}

export default App;
