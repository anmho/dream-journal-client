import Sidebar from "../components/Sidebar";
import Titlebar from "../components/Titlebar";
import { useState } from "react";
import EntryList from "../components/EntryList";
import AddEntryButton from "../components/AddEntryButton";

function Home() {
  const [entries, setEntries] = useState(["hello", "hello", "hello"]);
  return (
    <div className="bg-gradient-to-br ">
      <Titlebar />
      <Sidebar />
      <AddEntryButton />
      <div className="p-4 pl-72">
        <p className="text-2xl font-bold mb-5 text text-white">Entries</p>
        <EntryList todos={entries} />
      </div>
    </div>
  );
}

export default Home;
