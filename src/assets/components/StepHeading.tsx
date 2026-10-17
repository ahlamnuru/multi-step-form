type StepHeadingProps = {
  title: string;
  description: string;
};

function StepHeading({ title, description }: StepHeadingProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-950 md:text-3xl">{title}</h1>
      <p className="mt-2 text-grey-500">{description}</p>
    </div>
  );
}

export default StepHeading;
