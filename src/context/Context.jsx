import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [currentEmojiDetails, setCurrentEmojiDetails] = useState({
    emoji: "",
    name: "",
  });
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [isEmojiModalOpen, setIsEmojiModalOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        currentEmojiDetails,
        setCurrentEmojiDetails,
        query,
        setQuery,
        searchResults,
        setSearchResults,
        searchResultsLoading,
        setSearchResultsLoading,
        isEmojiModalOpen,
        setIsEmojiModalOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
