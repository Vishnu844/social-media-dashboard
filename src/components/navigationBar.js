"use client";

import React, { useState } from "react";
import socialIcon from "../../public/images/5843.jpg";
import defaultUser from "../../public/images/user.png";
import Image from "next/image";

const NavigationBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log(isSidebarOpen);
  return (
    <div className="bg-gray-800 text-white min-w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image className="h-10 w-10" src={socialIcon} alt="Social Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <p>Home</p>
                <p>Messages</p>
                <p>Notifications</p>
                <p>Settings</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <Image
                  src={defaultUser}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Profile
                  </p>

                  <button
                    className="w-full text-left block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ≡
          </button>
          {isSidebarOpen && (
            <div className="absolute right-0 mt-64 mr-8 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-t-md">
                Home
              </p>
              <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Messages
              </p>
              <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Notifications
              </p>
              <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Profile
              </p>
              <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Settings
              </p>
              <button className="w-full text-left block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-b-md">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
