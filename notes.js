const fs = require("fs");
const chalk = require("chalk");

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
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("New note added!"))
  } else {
    console.log(chalk.bgRed("Note Title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newDataWithRemovedNote = notes.filter(note => note.title !== title)
  if (notes.length === newDataWithRemovedNote.length) {
    console.log(chalk.bgRed("No note found!"))
  } else {
    saveNotes(newDataWithRemovedNote);
    console.log(chalk.bgGreen("Note removed!"))
  }

}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse('Your notes'))
  console.log('\n')
  notes.forEach(note => {
    console.log(note.title)
    console.log(note.body)
    console.log('\n')
  });
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes
};
