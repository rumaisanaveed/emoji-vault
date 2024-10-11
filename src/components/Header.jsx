import { FaSmile } from "react-icons/fa";

export const Header = () => {
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
        className="border border-gray-300 px-3 py-2 rounded-md w-96 mt-3 md:mt-0"
      />
    </header>
  );
};
