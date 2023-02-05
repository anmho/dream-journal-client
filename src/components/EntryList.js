import React from "react";
import JournalEntry from "./JournalEntry";

export default function EntryList({ entries }) {
  return entries.map((entry) => {
    return <JournalEntry key={entry.id} entry={entry} />;
  });
}
