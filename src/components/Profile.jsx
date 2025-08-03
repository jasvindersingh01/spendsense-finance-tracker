import React, { useState, useEffect, useRef } from "react";
import { UserCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  useEffect(() => {
    const handleOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    }
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setOpen(!open)}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white cursor-pointer"
      >
        <UserCircle className="w-6 h-6" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-800 shadow-lg rounded p-3 z-50">
          <p className="font-semibold text-sl text-gray-800 dark:text-white">{user?.username || "Unknown"}</p>
          <p className="text-gray-500 dark:text-gray-400">{user?.email || "No email"}</p>
          <button
            onClick={handleLogout}
            className="mt-2 w-full cursor-pointer bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
          >
            Logout
          </button>
        </div>
      )

      }

    </div>
  )
}

export default Profile;