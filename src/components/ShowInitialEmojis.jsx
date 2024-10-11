import axios from "axios";
import { useEffect, useState } from "react";

export const Emojis = ({ setIsEmojiModalOpen }) => {
  const [loading, setLoading] = useState(false);
  const [emojis, setEmojis] = useState([]);

  const fetchStarterEmojis = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}categories/smileys-emotion?access_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      console.log(response);
      if (response.status === 200) {
        const emojis = response.data.slice(0, 40);
        console.log("First 40 emojis", emojis);
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
      {loading ? (
        <div className="flex items-center justify-center h-[80vh]">
          <p className="text-2xl text-black font-semibold">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 p-8 gap-4">
          {emojis.map(({ character, unicodeName }, index) => (
            <div
              onClick={() => setIsEmojiModalOpen(true)}
              className="px-3 md:py-9 lg:py-12 py-6 flex cursor-pointer items-center text-center justify-center gap-2 md:gap-4 flex-col shadow-lg rounded-md border border-gray-100"
              key={index}
            >
              <p className="text-2xl md:text-5xl">{character}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
