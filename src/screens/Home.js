import Sidebar from "../components/Sidebar";
import Titlebar from "../components/Titlebar";
import { useState, useEffect } from "react";
import EntryList from "../components/EntryList";
import AddEntryButton from "../components/AddEntryButton";
import UserService from "../services/user";
import EntryService from "../services/entry";

function Home({ setLoggedIn }) {
  const [entries, setEntries] = useState([]);

  const loadEntries = async () => {
    const entries = await EntryService.getEntries(UserService.getUserId);
    console.log(entries);
    setEntries(entries);
  };
  useEffect(() => {
    // UserService.getUser(user_id);

    loadEntries();
  }, []);

  return (
    <div className="bg-gradient-to-br ">
      <Titlebar />
      <Sidebar setLoggedIn={setLoggedIn} />
      <AddEntryButton setEntries={setEntries} />
      <div className="p-4 pl-72">
        <p className="text-2xl font-bold mb-5 text text-white">Entries</p>
        <EntryList entries={entries} />
      </div>
    </div>
  );
}

export default Home;
