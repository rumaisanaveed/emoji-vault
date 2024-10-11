import { Modal } from "antd";

export const EmojiModal = ({ isEmojiModalOpen, setIsEmojiModalOpen }) => {
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
        <p className="text-4xl md:text-5xl">😅</p>
        <h1 className=" text-black font-semibold py-3 text-2xl">
          Smiling Face with Smiling Eyes
        </h1>
        <button
          style={{ backgroundColor: "#ffc6c6" }}
          className="py-2 px-5 text-white rounded-md"
        >
          Copy Emoji
        </button>
      </div>
    </Modal>
  );
};
