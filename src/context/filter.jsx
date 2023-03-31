import { createContext, useState } from 'react';

// 1. Create context
export const FiltersContext = createContext();

// 2. Create provider
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
