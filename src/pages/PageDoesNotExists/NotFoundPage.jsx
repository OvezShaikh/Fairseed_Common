// NotFoundPage.js

import React from "react";

const NotFoundPage = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl mb-8">Page Not Found</p>
        <img
          src="https://via.placeholder.com/400"
          alt="404 Image"
          className="w-64 h-64 mx-auto mb-8"
        />
        <p className="text-lg text-gray-700">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a href="/" className="text-blue-500 underline mt-4">
          Go back to homepage
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
