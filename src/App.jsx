import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Emojis } from "./components/ShowEmojis";
import { EmojiModal } from "./components/EmojiModal";

function App() {
  return (
    <>
      <Header />
      <Emojis />
      <EmojiModal />
      <Footer />
    </>
  );
}

export default App;
