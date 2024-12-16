import React, { useState, useEffect, useRef } from 'react';

const AvatarDropdown = ({ username }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle outside click to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Image */}
      <button
        className="flex items-center space-x-2"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <img
          src={`https://i.pravatar.cc/40?u=${username}`}
          alt={username}
          className="w-10 h-10 rounded-full border"
        />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md z-50">
          <div className="px-4 py-2 text-sm text-gray-700 border-b">
            Logged in as <strong>{username}</strong>
          </div>
          <button
            onClick={() => {
              console.log('Logout clicked');
              // Add logout logic here
            }}
            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
