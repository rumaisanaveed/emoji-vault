import React from "react";

export const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 p-8 gap-4">
      {Array.from({ length: 40 }).map((_, index) => (
        <div
          key={index}
          className="px-3 animate-pulse md:py-14 lg:py-20 py-9 bg-gray-200 rounded-md"
        ></div>
      ))}
    </div>
  );
};
