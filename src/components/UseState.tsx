import { FC, useState } from "react";
import { Minus, Plus } from "lucide-react";

// Interface for component props (empty as no props are passed here)
interface UseStateProps {}

const UseState: FC<UseStateProps> = () => {
  // Initializing state using useState hook
  const [count, setCount] = useState<number>(0);

  // Increment and Decrement counter functions
  const IncrementCounter = () => setCount((prevState) => prevState + 1);
  const DecrementCounter = () => setCount((prevState) => prevState - 1);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-5">
      {/* Heading */}
      <h1 className="text-4xl font-sans font-bold my-5 text-center">
        useState in React Hooks
      </h1>

      {/* Description */}
      <p className="text-xl my-3 text-center">
        The <code className="font-semibold text-blue-700">useState</code> hook
        in React enables state management within functional components, allowing
        developers to declare and update state variables seamlessly.
      </p>

      {/* Section heading */}
      <h3 className="text-2xl font-sans my-5">Implementing useState Hook</h3>

      {/* Counter Section */}
      <p className="text-blue-900 text-xl text-center">Counter</p>

      {/* Counter card with hover effects */}
      <div className="flex flex-col items-center bg-white p-5 my-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="flex text-blue-800 items-center my-5">
          {/* Decrement Button */}
          <button onClick={DecrementCounter} className="rounded-full p-5 mx-3">
            <Minus />
          </button>

          {/* Display Counter */}
          <p className="text-2xl font-bold">{count}</p>

          {/* Increment Button */}
          <button onClick={IncrementCounter} className="rounded-full p-5 mx-3">
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseState;
