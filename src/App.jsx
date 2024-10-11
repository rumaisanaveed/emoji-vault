import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Emojis } from "./components/ShowInitialEmojis";
import { EmojiModal } from "./components/EmojiModal";

function App() {
  const [isEmojiModalOpen, setIsEmojiModalOpen] = useState(false);
  return (
    <>
      <EmojiModal
        isEmojiModalOpen={isEmojiModalOpen}
        setIsEmojiModalOpen={setIsEmojiModalOpen}
      />
      <Header />
      <Emojis setIsEmojiModalOpen={setIsEmojiModalOpen} />
      <Footer />
    </>
  );
}

export default App;
