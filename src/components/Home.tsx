import { FC } from "react";
import Introduction from "./Introduction";
import { Link } from "react-router-dom";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <main>
      <Introduction />
      <h1>Sections</h1>
      <ul>
        <li>
          <Link to="/use-state">Use State</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
