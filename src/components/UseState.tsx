import { FC, useState } from "react";
import { Minus, Plus } from "lucide-react";

interface UseStateProps {}

const UseState: FC<UseStateProps> = ({}) => {
  const [count, setCount] = useState(() => {
    return 0;
  });

  const IncrementCounter = () => {
    setCount((prevState) => prevState + 1);
  };
  const DecrementCounter = () => {
    setCount((prevState) => prevState - 1);
  };
  return (
    <div className="flex flex-col h-full w-full p-5">
      <h1 className="text-4xl font-sans font-bold my-5">
        useState in React hooks
      </h1>
      <p className="text-xl my-3">
        The useState hook in React enables state management within functional
        components, allowing developers to declare and update state variables
        seamlessly.
      </p>
      <h3 className="text-2xl font-sanss my-5">Implementing useState hook</h3>
      <p className="text-blue-900 text-xl">Counter</p>
      <div className="flex text-blue-800 items-center my-5">
        <button
          onClick={DecrementCounter}
          className="mx-2 border-solid border-black rounded-full border-2 p-2"
        >
          <Minus />
        </button>
        <p>{count}</p>
        <button
          onClick={IncrementCounter}
          className="mx-2 border-solid border-black rounded-full border-2 p-2"
        >
          <Plus />
        </button>
      </div>
    </div>
  );
};

export default UseState;
