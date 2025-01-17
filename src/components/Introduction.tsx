import { FC } from "react";

interface IntroductionProps {}

const Introduction: FC<IntroductionProps> = ({}) => {
  return (
    <div>
      <h1>Introduction to react hooks</h1>
      <p>
        React Hooks were introduced in React 16.8 as a way to use state and
        other React features in functional components, eliminating the need for
        class components. They simplify React development, making it more
        intuitive and reducing boilerplate code.
      </p>
      <div>
        <h2>Why Hooks?</h2>
        <ol>
          <li>
            <b>Simplifies State Management:</b> Manage state without converting
            to a class component.
          </li>
          <li>
            <b>Code Reusability:</b> Share logic using custom hooks instead of
            HOCs or render props.
          </li>
          <li>
            <b>Cleaner Codebase:</b> Functional components + hooks = readable,
            maintainable code.
          </li>
          <li>
            <b>Powerful Features:</b> Unlock lifecycle methods, performance
            optimization, and more within functional components.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Introduction;
