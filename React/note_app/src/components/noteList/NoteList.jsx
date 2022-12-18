import React from "react";
import "./style.css";

import Note from "../note/Note";
import AddNote from "../addNote/AddNote";

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
