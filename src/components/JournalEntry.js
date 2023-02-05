import React from "react";
import moment from "moment";

export default function JournalEntry({ entry }) {
  console.log(entry);

  const parseDate = (dateString) => {
    const date = new Date(dateString);

    return moment(date).format("MMMM DD, YYYY");
  };
  return (
    <div className="py-5 margin-bottom: 10px mb-1 w-1/2 h-100 after:bg-black after:w-full after:h-4 after:relative after:bottom-0 after:left-0 after:z-50">
      <div className="flex justify-center item-start">
        <div className="w-1/2 aspect-square text-white bg-blue-500 overflow-hidden">
          <img src={entry.url} alt={"dream"} className="w-full object-cover" />
        </div>

        <div className="p-8">
          <p className="text-white text-2xl font-semibold">
            {parseDate(entry.created_at)}
          </p>
          <p className="text-white">{entry.title} </p>
          <p className="text-white">{entry.description}</p>
        </div>
      </div>
    </div>
  );
}
