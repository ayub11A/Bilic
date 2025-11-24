import { createContext, useState, useContext } from "react";

const SearchContext = createContext();

// ✅ Provider
export function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

// ✅ Custom Hook
export function useSearch() {
  return useContext(SearchContext);
}

export default SearchContext;
