import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UseState from "./components/UseState";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/use-state" Component={UseState} />
      </Routes>
    </>
  );
};

export default App;
