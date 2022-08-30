// Images
import thanks from "../../images/illustration-thank-you.svg";

const index = ({ rates, setRates, setIsSubmitted }) => {
  return (
    <div className="wrapper">
      <img src={thanks} alt="" className="block mx-auto mb-5 " />
      <div className="flex items-center justify-center">
        <p className="p-rating bg-gray-700 rounded-full text-center pt-1 text-sm px-5">
          You selected {rates ? rates : 5} out of 5
        </p>
      </div>
      <h2 className="text-gray-100 text-3xl my-6 text-center">Thank you!</h2>
      <p className="text-gray-400 mb-10 text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      <div className="text-center">
        <button
          onClick={() => {
            setIsSubmitted(false);
            setRates("");
          }}
          className="button-rating w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full"
        >
          Rate Again
        </button>
      </div>
    </div>
  );
};

export default index;
