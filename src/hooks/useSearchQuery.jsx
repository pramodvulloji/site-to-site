import { useState, useCallback } from 'react';
import useDebounce from './useDebounce'; // Custom debounce hook

export default function useSearchQuery() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const [debouncedSearchQuery] = useDebounce(handleSearch, 500, [searchQuery]);

  return {
    searchQuery: debouncedSearchQuery,
    setSearchQuery,
    handleSearch,
  };
}
