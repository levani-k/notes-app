const fs = require("fs");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
  } else {
    console.log("Note Title taken!");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newDataWithRemovedNote = notes.filter(note => note.title !== title)
  saveNotes(newDataWithRemovedNote);
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
};
