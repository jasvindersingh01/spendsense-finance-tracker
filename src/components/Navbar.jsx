import React from "react";
import ToggleTheme from "./ToggleTheme";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <header className="w-full px-4 py-2 flex flex-col sm:flex-row justify-between items-center border-b bg-white dark:bg-gray-900 dark:border-gray-800 shadow-sm gap-2">
  <Link className="flex justify-center sm:justify-start">
    <img src="/src/assets/spendsense-logo.png" alt="SpendSense Logo" className="h-13 block dark:hidden" />
    <img src="/src/assets/spendsense-logo-dark.png" alt="SpendSense Logo" className="h-13 hidden dark:block" />
  </Link>

  <div className="flex gap-2">
    <ToggleTheme />
    <Profile />
  </div>
</header>

  )
}
export default Navbar;