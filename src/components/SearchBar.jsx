// import React, { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearch}
//         placeholder="Search by Model, Brand, CPU, etc."
//         className="p-2 border border-gray-300 rounded"
//       />
//     </div>
//   );
// };

// export default SearchBar;






// import React, { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearch}
//         placeholder="Search by Model, Brand, CPU, etc."
//         className="p-2 border border-gray-300 rounded"
//       />
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by Model, Brand, CPU, etc."
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchBar;


