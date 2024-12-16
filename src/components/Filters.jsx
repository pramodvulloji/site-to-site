// import React from 'react';

// const Filters = ({ filters, onFilterChange }) => {
//   return (
//     <div className="filters p-4">
//       {Object.keys(filters).map((filterKey) => (
//         <div key={filterKey}>
//           <label>{filterKey}</label>
//           <select onChange={(e) => onFilterChange(filterKey, e.target.value)} className="p-2 border border-gray-300">
//             <option value="">Select {filterKey}</option>
//             {filters[filterKey].map((value, index) => (
//               <option key={index} value={value}>
//                 {value}
//               </option>
//             ))}
//           </select>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Filters;

import React from 'react';

const Filters = ({ filters, onFilterChange }) => {
  if (Object.keys(filters).length === 0) return null; // Only show if filters are loaded

  return (
    <div className="filters p-4">
      {Object.keys(filters).map((filterKey) => (
        <div key={filterKey}>
          <label>{filterKey}</label>
          <select
            onChange={(e) => onFilterChange(filterKey, e.target.value)}
            className="p-2 border border-gray-300"
          >
            <option value="">Select {filterKey}</option>
            {filters[filterKey].map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Filters;
