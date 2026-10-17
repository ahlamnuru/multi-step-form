import iconThankYou from "../images/icon-thank-you.svg";

function StepThanks() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center md:h-full md:py-0">
      <img src={iconThankYou} alt="" className="h-14 w-14 md:h-20 md:w-20" />
      <h1 className="mt-6 text-2xl font-bold text-blue-950 md:mt-8 md:text-3xl">Thank you!</h1>
      <p className="mt-3 max-w-md text-grey-500">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default StepThanks;
