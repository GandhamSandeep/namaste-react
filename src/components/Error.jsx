import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{err.statusText || err.message}</p>
    </div>
  );
};

export default Error;
