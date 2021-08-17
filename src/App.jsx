import React from "react";
import useTitle from "./useTitle";

const App = () => {
  useTitle("My title");

  return <p> Check browser's title </p>;
};

export default App;
