import React from "react";
import { Bell, Settings, User, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-lg border-b border-gray-200 dark:border-gray-700/50 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
              MedChain
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 
                       rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 
                       rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-200"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </button>
            <button
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 
                       rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-200"
              aria-label="Settings"
            >
              <Settings className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium dark:text-gray-300">
                Raman Singh
              </span>
              <button
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 
                         rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-200"
                aria-label="User profile"
              >
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
