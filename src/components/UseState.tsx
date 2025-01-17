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
    <div>
      <h1>useState in React hooks</h1>
      <p>
        The useState hook in React enables state management within functional
        components, allowing developers to declare and update state variables
        seamlessly.
      </p>
      <h3>Implementing useState hook</h3>
      <p>Counter</p>
      <button onClick={DecrementCounter}>
        <Minus />
      </button>
      <p>{count}</p>
      <button onClick={IncrementCounter}>
        <Plus />
      </button>
    </div>
  );
};

export default UseState;
