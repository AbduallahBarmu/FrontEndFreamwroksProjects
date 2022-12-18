import { useState } from "react";
import "./style.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChngeNoteText = (event) => {
    //subtracts the limit of the entered text from characterLimit
    // if the text is - means user entered more charcters so will skip and stop on the Remining limit
    if (characterLimit - event.target.value.length >= 0)
      setNoteText(event.target.value);
  };

  const hanleSaveClick = () => {
    // this condition will prevent add it white space as a note
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      // reset the form after adding the note
      setNoteText("");
    }
  };

  return (
    <div className="new-note">
      <textarea
        className="txt-area"
        rows="8"
        cols="10"
        placeholder="Type To Add a Note . . . "
        value={noteText}
        onChange={handleChngeNoteText}
      ></textarea>
      <div className="note-footer">
        <small> {characterLimit - noteText.length} Remaining</small>
        <button className="btn-save" onClick={hanleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
