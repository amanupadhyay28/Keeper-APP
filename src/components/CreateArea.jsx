import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChanges(event) {
    const { name, value } = event.target;
    setNote((preNote) => {
      return {
        ...preNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault(); //as natural behaivour of form is to refresh page
    setNote({
      title: "",
      content: ""
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChanges}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChanges}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
