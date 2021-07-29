const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes");

// add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title, body }) => {
    notes.addNote(title, body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title }) => {
    notes.removeNote(title)
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "List you notes",
  handler: () => {
    console.log("Listing out all notes");
  },
});

// create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => {
    console.log("Reading a note");
  },
});

yargs.parse();
