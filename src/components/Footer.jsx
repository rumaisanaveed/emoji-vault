import { SiGithub } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="p-5 bg-gray-200 mt-4 fixed bottom-5 rounded-md right-5">
      <a
        href="https://github.com/rumaisanaveed"
        target="blank"
        className="flex items-center justify-center gap-2"
      >
        <SiGithub className="text-3xl" />
        <h1>Created by Rumaisa</h1>
      </a>
    </footer>
  );
};
