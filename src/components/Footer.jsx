import React from "react";

const Footer = () => {
  return (
<footer className="w-full py-2 sm:py-4 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-700 mt-4 sm:mt-8">
  © {new Date().getFullYear()} SpendSense. Created by 
  <span className="font-medium text-blue-600 dark:text-blue-400"> Jasvinder Singh</span>
</footer>
  );
};

export default Footer;
