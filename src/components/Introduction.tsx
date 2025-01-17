import { FC } from "react";

interface IntroductionProps {}

const Introduction: FC<IntroductionProps> = ({}) => {
  return (
    <div className="max-w-4xl mx-auto ">
      <h1 className="text-3xl font-semibold text-blue-800 mb-4">
        Introduction to React Hooks
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        React Hooks were introduced in React 16.8 as a way to use state and
        other React features in functional components, eliminating the need for
        class components. They simplify React development, making it more
        intuitive and reducing boilerplate code.
      </p>
      <div>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Why Hooks?
        </h2>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <b className="font-medium">Simplifies State Management:</b> Manage
            state without converting to a class component.
          </li>
          <li>
            <b className="font-medium">Code Reusability:</b> Share logic using
            custom hooks instead of HOCs or render props.
          </li>
          <li>
            <b className="font-medium">Cleaner Codebase:</b> Functional
            components + hooks = readable, maintainable code.
          </li>
          <li>
            <b className="font-medium">Powerful Features:</b> Unlock lifecycle
            methods, performance optimization, and more within functional
            components.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Introduction;
