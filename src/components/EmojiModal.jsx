import { Modal } from "antd";
import { useContext } from "react";
import Context from "../context/Context";
import { toast } from "sonner";

export const EmojiModal = () => {
  const { currentEmojiDetails, isEmojiModalOpen, setIsEmojiModalOpen } =
    useContext(Context);

  const handleCopyEmoji = () => {
    navigator.clipboard.writeText(currentEmojiDetails.emoji).then(
      () => {
        toast.success("Emoji copied to clipboard.");
      },
      (err) => {
        console.error("Could not copy emoji: ", err);
      }
    );
  };

  return (
    <Modal
      open={isEmojiModalOpen}
      rootClassName="rm-emoji-modal"
      title=""
      centered
      footer={null}
      onCancel={() => setIsEmojiModalOpen(false)}
    >
      <div className="flex flex-col items-center gap-3 justify-center text-center py-3">
        <p className="text-4xl md:text-5xl">{currentEmojiDetails.emoji}</p>
        <h1 className="text-black font-semibold py-3 text-2xl">
          {currentEmojiDetails.name}
        </h1>
        <button
          onClick={handleCopyEmoji}
          style={{ backgroundColor: "#ffc6c6" }}
          className="py-2 px-5 text-white rounded-md"
        >
          Copy Emoji
        </button>
      </div>
    </Modal>
  );
};
