import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import { Emoji } from "./Emoji";
import { SkeletonLoader } from "./SkeletonLoader";

export const Emojis = () => {
  const { searchResultsLoading, query } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [emojis, setEmojis] = useState([]);
  const { searchResults } = useContext(Context);

  const fetchStarterEmojis = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}categories/smileys-emotion?access_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      // console.log(response);
      if (response.status === 200) {
        const emojis = response.data.slice(0, 40);
        // console.log("First 40 emojis", emojis);
        setEmojis(emojis);
      }
    } catch (error) {
      console.error(`Error fetching emojis, ${error}`);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStarterEmojis();
  }, []);

  return (
    <>
      {query === "" ? (
        <>
          {loading ? (
            <SkeletonLoader />
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 p-8 pt-0 md:pt-8 gap-4">
              <Emoji data={emojis} />
            </div>
          )}
        </>
      ) : (
        <>
          {searchResultsLoading ? (
            <SkeletonLoader />
          ) : (
            <>
              <div className="px-8 text-xl">
                <p>🔍 Search</p>
                <p className="pt-2">Search Results for: "{query}"</p>
                {searchResults.length === 0 && query !== "" && (
                  <p className="pt-2">No emojis found...</p>
                )}
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 p-8 gap-4">
                {searchResults.length > 0 && <Emoji data={searchResults} />}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
