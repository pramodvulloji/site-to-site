// import React, { useState, useEffect } from 'react';
// import Card from '@/components/Card';
// import Filters from '@/components/Filters';
// import SearchBar from '@/components/SearchBar';
// import { getProducts } from '@/api/products';

// const Home = () => {
//   const [phones, setPhones] = useState([]); // Full data from server
//   const [filters, setFilters] = useState({}); // Filter options like brand/category
//   const [filteredPhones, setFilteredPhones] = useState([]); // Results shown after search or filters

//   useEffect(() => {
//     async function fetchPhones() {
//       try {
//         const data = await getProducts();
//         console.log('Phones fetched:', data);

//         // Set data to phones and setup filters
//         const newFilters = {
//           Brand: [...new Set(data.map((phone) => phone.brand))],
//           Category: [...new Set(data.map((phone) => phone.category))],
//         };

//         setPhones(data);
//         setFilters(newFilters);
//         setFilteredPhones(data);
//       } catch (error) {
//         console.error('Failed to fetch phones', error);
//       }
//     }

//     fetchPhones();
//   }, []);

//   const handleSearch = (query) => {
//     console.log('Search Query:', query);
//     const result = phones.filter((phone) =>
//       phone.name.toLowerCase().includes(query.toLowerCase()) ||
//       phone.brand.toLowerCase().includes(query.toLowerCase()) ||
//       phone.model.toLowerCase().includes(query.toLowerCase())
//     );

//     console.log('Filtered Results:', result);
//     setFilteredPhones(result);
//   };

//   const handleFilterChange = (filterKey, value) => {
//     console.log('Filter changed:', filterKey, value);
//     if (!value) {
//       setFilteredPhones(phones);
//       return;
//     }

//     const filtered = phones.filter((phone) => phone[filterKey] === value);
//     console.log('Phones filtered after change:', filtered);
//     setFilteredPhones(filtered);
//   };

//   return (
//     <div className="home">
//       <SearchBar onSearch={handleSearch} />
//       <Filters filters={filters} onFilterChange={handleFilterChange} />
//       <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredPhones.length > 0 ? (
//           filteredPhones.map((phone) => (
//             <Card key={phone.id} phone={phone} />
//           ))
//         ) : (
//           <p>No products available. Try adjusting your filters or search.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';
import Filters from '@/components/Filters';
import SearchBar from '@/components/SearchBar';
import { getProducts } from '@/api/products';

const Home = () => {
  const [phones, setPhones] = useState([]); // Products to render
  const [filters, setFilters] = useState({}); // Available filters
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({});

  // Fetch initial products & populate filters
  useEffect(() => {
    async function fetchInitialData() {
      try {
        const data = await getProducts();
        const newFilters = {
          Brand: [...new Set(data.map((phone) => phone.brand))],
          Category: [...new Set(data.map((phone) => phone.category))],
        };
        setPhones(data);
        setFilters(newFilters);
      } catch (error) {
        console.error('Failed to fetch initial products');
      }
    }

    fetchInitialData();
  }, []);

  const fetchFilteredResults = async (params) => {
    try {
      const data = await getProducts(params);
      setPhones(data);
    } catch (error) {
      console.error('Error fetching filtered/search results', error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchFilteredResults({ search: query });
  };

  const handleFilterChange = (filterKey, value) => {
    const newFilterOptions = { ...filterOptions, [filterKey]: value };
    setFilterOptions(newFilterOptions);
    fetchFilteredResults({ ...newFilterOptions });
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {phones.length > 0 ? (
          phones.map((phone) => (
            <Card key={phone.id} phone={phone} />
          ))
        ) : (
          <p>No products available. Adjust your search or filter options.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
