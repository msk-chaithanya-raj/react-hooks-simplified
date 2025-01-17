import { FC } from "react";
import Introduction from "./Introduction";
import { Link } from "react-router-dom";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <Introduction />
      <h1 className="text-3xl font-semibold text-blue-800 mt-6 mb-4">
        Sections
      </h1>
      <ul className="list-item space-y-2">
        <li className="list-disc list-inside mx-5">
          <Link
            to="/use-state"
            className="text-blue-500 hover:text-blue-700 transition duration-200"
          >
            Use State
          </Link>
        </li>
        <li className="list-disc list-inside mx-5">
          <Link
            to="/use-effect"
            className="text-blue-500 hover:text-blue-700 transition duration-200"
          >
            Use Effect
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
