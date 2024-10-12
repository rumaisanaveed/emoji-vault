import { SiGithub } from "react-icons/si";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="mt-4 flex items-center justify-between">
      <button
        className="rounded-full bg-gray-100 flex items-center justify-center fixed left-5 bottom-5 h-16 w-16"
        onClick={handleScrollToTop}
      >
        <MdOutlineKeyboardArrowUp
          style={{
            fontSize: 40,
          }}
        />
      </button>
      <a
        href="https://github.com/rumaisanaveed"
        target="blank"
        className="flex items-center justify-center p-5 bg-gray-100 rounded-md gap-2 fixed bottom-5 right-5"
      >
        <SiGithub className="text-3xl" />
        <h1>Created by Rumaisa</h1>
      </a>
    </footer>
  );
};
