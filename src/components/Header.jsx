// import React from 'react';
// import SearchBar from './SearchBar';
// import { Link, useNavigate } from 'react-router-dom';
// import AvatarDropdown from './AvatarDropdown';
// import logo from '@/assets/images/Reliance_Jio_Logo.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// const Header = ({ user, visitorCount, setUser }) => {
//   const handleLoginClick = () => {
//     setUser('user'); // Clear the user state (log out)
//   };

//   const handleLogout = () => {
//     setUser(null); // Clear the user state (log out)
//   };

//   const handleSearch = (query) => {
//     setSearchTerm(query);
//     console.log('Search query:', query);
//   };
//   return (
//     <>
//       <header className="bg-slate-50 fixed  top-0 z-40 w-full flex flex-wrap items-center justify-between px-2 navbar-expand-lg py-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to={'/'}>
//             <div className="flex items-center space-x-4">
//               <img src={logo} alt="Library Logo" className=" h-10 w-10" />
//               <h1 className="text-xl font-bold text-gray-700">The PHONE Library</h1>
//             </div>
//           </Link>
//           <div className="flex border rounded-3xl items-center focus-within:ring-2 focus-within:ring-gray-400">
//             <input
//               type="text"
//               placeholder="Search for devices..."
//               className="shadow-none focus:shadow-none focus:ring-0 border-none outline-none bg-gray-50 rounded-3xl px-4 py-2 flex-1"
//             />
//             <button className="bg-gray-50 px-4 py-2 text-gray-700 border-none rounded-3xl hover:text-sky-600">
//               <FontAwesomeIcon icon={faSearch} />
//             </button>
//           </div>
//           <div className="flex  items-center space-x-4">
//             {user ? (
//               <div className="flex flex-col items-center space-x-4">
//                 <AvatarDropdown user={user} onLogout={handleLogout} />
//                 <span className="text-[x-small] text-gray-500">Visitor Count: {visitorCount}</span>
//               </div>
//             ) : (
//               <button
//                 onClick={handleLoginClick}
//                 className="bg-transparent px-4 py-2 rounded hover:bg-blue-600 hover:text-gray-50"
//               >
//                 Login
//               </button>
//             )}
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h10M1 7h15M1 13h10"
//               />
//             </svg>
//           </div>
//         </div>
//         {/* <div className=" w-full flex flex-wrap items-center justify-self-center  bg-sky-50 searchContainer ">
//           <div className="container mx-auto py-8 ">
            
//              <SearchBar /> 
//           </div>
//         </div> */}
//       </header>
//     </>
//   );
// };

// export default Header;








import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import AvatarDropdown from './AvatarDropdown';
import logo from '@/assets/images/Reliance_Jio_Logo.svg';

const Header = ({ user, visitorCount, setUser }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleLoginClick = () => {
    setUser('user');
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
    console.log('Search query:', query);
  };

  return (
    <>
      <header className="bg-slate-50 fixed top-0 z-40 w-full flex flex-wrap items-center justify-between px-2 navbar-expand-lg py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to={'/'}>
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Library Logo" className="h-10 w-10" />
              <h1 className="text-xl font-bold text-gray-700">The PHONE Library</h1>
            </div>
          </Link>
          {/* SearchBar added here */}
          <div className="flex items-center">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex flex-col items-center space-x-4">
                <AvatarDropdown user={user} onLogout={handleLogout} />
                <span className="text-[x-small] text-gray-500">Visitor Count: {visitorCount}</span>
              </div>
            ) : (
              <button
                onClick={handleLoginClick}
                className="bg-transparent px-4 py-2 rounded hover:bg-blue-600 hover:text-gray-50"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>
      {/* Display Search Term for Debugging */}
      <div className="py-4 bg-gray-50 text-center">
        <span>Search term: {searchTerm}</span>
      </div>
    </>
  );
};

export default Header;








// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import AvatarDropdown from './AvatarDropdown';
// import logo from '@/assets/images/Reliance_Jio_Logo.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import SearchBar from './SearchBar';

// const Header = ({ user, visitorCount, setUser }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleLoginClick = () => {
//     setUser('user'); // Clear the user state (log out)
//   };

//   const handleLogout = () => {
//     setUser(null); // Clear the user state (log out)
//   };

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearch = (query) => {
//       // setSearchTerm(query);
//      // onSearch(e.target.value);
//     console.log('Search executed with:', searchTerm);
//     // Place API calls or logic related to search here
//   };

//   return (
//     <>
//       <header className="bg-slate-50 fixed top-0 z-40 w-full flex flex-wrap items-center justify-between px-2 navbar-expand-lg py-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to={'/'}>
//             <div className="flex items-center space-x-4">
//               <img src={logo} alt="Library Logo" className="h-10 w-10" />
//               <h1 className="text-xl font-bold text-gray-700">The PHONE Library</h1>
//             </div>
//           </Link>
//           <div className="flex border rounded-3xl items-center focus-within:ring-2 focus-within:ring-gray-400">
//             {/* Search Input */}
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleInputChange}
//               placeholder="Search for devices..."
//               className="shadow-none focus:shadow-none focus:ring-0 border-none outline-none bg-gray-50 rounded-3xl px-4 py-2 flex-1"
//             />
//             {/* Search Button */}
//             <button
//               className="bg-gray-50 px-4 py-2 text-gray-700 border-none rounded-3xl hover:text-sky-600"
//               onClick={handleSearch}
//             >
//               <FontAwesomeIcon icon={faSearch} />
//             </button>
//           </div>
//           <div className="flex items-center space-x-4">
//             {user ? (
//               <div className="flex flex-col items-center space-x-4">
//                 <AvatarDropdown user={user} onLogout={handleLogout} />
//                 <span className="text-[x-small] text-gray-500">Visitor Count: {visitorCount}</span>
//               </div>
//             ) : (
//               <button
//                 onClick={handleLoginClick}
//                 className="bg-transparent px-4 py-2 rounded hover:bg-blue-600 hover:text-gray-50"
//               >
//                 Login
//               </button>
//             )}
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h10M1 7h15M1 13h10"
//               />
//             </svg>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from "../utils/axios";
// import AvatarDropdown from './AvatarDropdown';
// import logo from '@/assets/images/Reliance_Jio_Logo.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import SearchBar from './SearchBar';

// const Header = ({ user, visitorCount, setUser }) => {
//   const [products, setProducts] = useState([]); // State to store fetched products
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleLoginClick = () => {
//     setUser('user');
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };

//   // Fetch backend data dynamically
//   const fetchSearchResults = async (query) => {
//     if (!query) return;
//     setIsLoading(true);
//     try {
//       const response = await axios.get(`/products?search=${query}`); // Example backend endpoint
//       setProducts(response.data); // Update fetched products
//       console.log('Fetched products:', response.data);
//     } catch (err) {
//       console.error('Error fetching search results:', err);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <header className="bg-slate-50 fixed top-0 z-40 w-full flex flex-wrap items-center justify-between px-2 navbar-expand-lg py-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to={'/'}>
//             <div className="flex items-center space-x-4">
//               <img src={logo} alt="Library Logo" className="h-10 w-10" />
//               <h1 className="text-xl font-bold text-gray-700">The PHONE Library</h1>
//             </div>
//           </Link>
//           <div className="flex border rounded-3xl items-center focus-within:ring-2 focus-within:ring-gray-400">
//             {/* SearchBar Integration */}
//             <SearchBar onSearch={fetchSearchResults} />
//             {/* Search Button */}
//             <div className="ml-2">
//               {isLoading ? (
//                 <span className="text-blue-500">Loading...</span>
//               ) : error ? (
//                 <span className="text-red-500">{error}</span>
//               ) : null}
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             {user ? (
//               <div className="flex flex-col items-center space-x-4">
//                 <AvatarDropdown user={user} onLogout={handleLogout} />
//                 <span className="text-[x-small] text-gray-500">Visitor Count: {visitorCount}</span>
//               </div>
//             ) : (
//               <button
//                 onClick={handleLoginClick}
//                 className="bg-transparent px-4 py-2 rounded hover:bg-blue-600 hover:text-gray-50"
//               >
//                 Login
//               </button>
//             )}
//           </div>
//         </div>
//       </header>
//       {/* Render the fetched products */}
//       <div className="py-4 bg-gray-50 text-center container mx-auto">
//         <h2 className="text-gray-700 text-lg">Search Results:</h2>
//         <div className="mt-2">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <div key={product.id} className="py-2">
//                 <p>{product.name}</p>
//               </div>
//             ))
//           ) : (
//             <span>No products found</span>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from "../utils/axios";
// import AvatarDropdown from './AvatarDropdown';
// import logo from '@/assets/images/Reliance_Jio_Logo.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import SearchBar from './SearchBar';

// const Header = ({ user, visitorCount, setUser }) => {
//   const [products, setProducts] = useState([]); // State for fetched data
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleLoginClick = () => {
//     setUser('user');
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };

//   const fetchSearchResults = async (query) => {
//     if (!query) return;
//     setIsLoading(true);
//     try {
//       const response = await axios.get(`/products?search=${query}`); // Call to the backend API
//       setProducts(response.data);
//       console.log('Search results: ', response.data);
//     } catch (err) {
//       console.error('Error fetching search results:', err);
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <header className="bg-slate-50 fixed top-0 z-40 w-full flex flex-wrap items-center justify-between px-2 navbar-expand-lg py-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to={'/'}>
//             <div className="flex items-center space-x-4">
//               <img src={logo} alt="Library Logo" className="h-10 w-10" />
//               <h1 className="text-xl font-bold text-gray-700">The PHONE Library</h1>
//             </div>
//           </Link>

//           {/* SearchBar with onSearch passed */}
//           <div className="flex items-center">
//             <SearchBar onSearch={fetchSearchResults} />
//           </div>

//           <div className="flex items-center space-x-4">
//             {user ? (
//               <div className="flex flex-col items-center space-x-4">
//                 <AvatarDropdown user={user} onLogout={handleLogout} />
//                 <span className="text-[x-small] text-gray-500">Visitor Count: {visitorCount}</span>
//               </div>
//             ) : (
//               <button
//                 onClick={handleLoginClick}
//                 className="bg-transparent px-4 py-2 rounded hover:bg-blue-600 hover:text-gray-50"
//               >
//                 Login
//               </button>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Render the fetched products */}
//       <div className="py-4 bg-gray-50 text-center container mx-auto">
//         {isLoading ? (
//           <span className="text-blue-500">Loading...</span>
//         ) : error ? (
//           <span className="text-red-500">{error}</span>
//         ) : null}

//         <h2 className="text-gray-700 text-lg mt-2">Search Results:</h2>
//         <div className="mt-2">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <div key={product.id} className="py-2">
//                 <p>{product.name}</p>
//               </div>
//             ))
//           ) : (
//             <span>No products found</span>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
