import { useContext } from "react";
import Context from "../context/Context";
import { formatString } from "../utils/helpers";

export const Emoji = ({ data }) => {
  const { setCurrentEmojiDetails, setIsEmojiModalOpen } = useContext(Context);

  const handleEmojiClick = (emojiName, emoji) => {
    const correctedEmojiName = formatString(emojiName);
    setCurrentEmojiDetails({ emoji: emoji, name: correctedEmojiName });
    setIsEmojiModalOpen(true);
  };

  return (
    <>
      {data?.map(({ character, unicodeName }, index) => (
        <div
          onClick={() => handleEmojiClick(unicodeName, character)}
          className="px-3 md:py-9 lg:py-12 py-6 flex cursor-pointer items-center text-center justify-center gap-2 md:gap-4 flex-col shadow-lg rounded-md border border-gray-100"
          key={index}
        >
          <p className="text-2xl md:text-5xl">{character}</p>
        </div>
      ))}
    </>
  );
};
