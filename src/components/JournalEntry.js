import React from "react";

export default function JournalEntry({ entry }) {
  return (
    <div className="py-5 margin-bottom: 10px mb-1 w-1/2 h-100 after:bg-black after:w-full after:h-4 after:relative after:bottom-0 after:left-0 after:z-50">
      <div className="flex justify-center item-start bg-red-500 p-4">
        <div className="w-1/2 aspect-square text-white bg-blue-500"></div>
        <div className="w-1/2 p-8">
          <p className="text-white">Date: </p>
          <p className="text-white">Title: </p>
          <p className="text-white">description</p>
        </div>
      </div>
    </div>
  );
}
