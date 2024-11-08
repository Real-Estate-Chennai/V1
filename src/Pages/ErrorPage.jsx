import React from "react";
const ErrorPage = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="mt-4 text-lg">An unexpected error has occurred.</p>
      <p>Please try refreshing the page or come back later.</p>
    </div>
  );
};

export default ErrorPage;
