import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg mb-4">{error.statusText || error.message}</p>
      <a href="/" className="text-blue-500 hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
