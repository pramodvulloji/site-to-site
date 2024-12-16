import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-8">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} The PHONE Library. All rights reserved.
      </p>
      <p className="text-xs mt-2">
        Powered by <span className="text-blue-400 font-semibold">React</span> &{' '}
        <span className="text-blue-400 font-semibold">Tailwind CSS</span>
      </p>
    </footer>
  );
};

export default Footer;
