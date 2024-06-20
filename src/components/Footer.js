import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-center">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="md:flex  justify-center   text-center">
          <span className="text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Flowbite™ . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
