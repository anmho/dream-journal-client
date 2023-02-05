import React from "react";
import JournalEntry from "./JournalEntry";

export default function EntryList({ todos, toggleTodo }) {
  return todos.map((todo) => {
    return <JournalEntry key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  });
}
