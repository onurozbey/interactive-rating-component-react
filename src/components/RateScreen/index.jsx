// Images
import star from "../../images/icon-star.svg";
// Hooks
import { useState } from "react";
// Components
import ThankYouScreen from "../ThankYouScreen";

const index = () => {
  const [rates, setRates] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const Button = ({ number }) => {
    return (
      <button
        onClick={() => setRates(number)}
        className="button-number bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 focus:bg-gray-400"
      >
        {number}
      </button>
    );
  };

  return (
    <>
      {!isSubmitted && (
        <div className="wrapper">
          <img src={star} alt="" className="bg-gray-700 p-2 rounded-full" />
          <h2 className="text-gray-100 text-3xl my-6">How did we do?</h2>
          <p className="text-gray-400 mb-10">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul className="grid grid-cols-5 gap-3 mb-10">
            <li>
              <Button number={1} />
            </li>
            <li>
              <Button number={2} />
            </li>
            <li>
              <Button number={3} />
            </li>
            <li>
              <Button number={4} />
            </li>
            <li>
              <Button number={5} />
            </li>
          </ul>
          <div className="text-center">
            <button
              onClick={() => setIsSubmitted(true)}
              className="button-rating w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {isSubmitted && (
        <ThankYouScreen
          rates={rates}
          setRates={setRates}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </>
  );
};

<ThankYouScreen />;

export default index;
