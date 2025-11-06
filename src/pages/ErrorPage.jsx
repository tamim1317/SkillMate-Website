import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4">
      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-xl text-center max-w-lg">
        <h1 className="text-5xl font-extrabold text-red-500 mb-4 animate-pulse">
          404
        </h1>
        <h2 className="text-3xl font-bold text-white mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-300 mb-6">
          {error?.statusText || error?.message || "Page not found."}
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl font-semibold hover:from-teal-500 hover:to-blue-500 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
