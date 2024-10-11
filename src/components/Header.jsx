import { useContext } from "react";
import { FaSmile } from "react-icons/fa";
import Context from "../context/Context";
import axios from "axios";

export const Header = () => {
  const { query, setQuery, setSearchResults, setSearchResultsLoading } =
    useContext(Context);

  const handleChange = async (e) => {
    setQuery(e.target.value);
    if (query.length > 2) {
      setSearchResultsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}emojis?search=${query}&access_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        console.log(response);
        if (
          response.data.status === "error" &&
          response.data.message === "No results found"
        ) {
          setSearchResults([]);
        } else if (Array.isArray(response.data)) {
          setSearchResults(response.data);
        }
        setSearchResultsLoading(false);
      } catch (error) {
        console.error(`Error while fetching emojis, ${error}`);
        setSearchResultsLoading(false);
        setSearchResults([]);
      } finally {
        setSearchResultsLoading(false);
      }
    }
  };

  return (
    <header className="p-8 flex flex-col items-start justify-start md:items-center md:flex-row md:justify-between">
      <div className="flex items-center gap-2">
        <FaSmile
          style={{
            fontSize: 30,
          }}
        />
        <h1 className="text-xl font-medium">Emoji Vault</h1>
      </div>
      <input
        type="text"
        placeholder="Search for emojis..."
        className="border border-gray-300 px-3 py-2 rounded-md w-96 mt-5 md:mt-0"
        onChange={handleChange}
      />
    </header>
  );
};
