'use strict';

function returnsAllNotes() {
  var noteList = new NoteList();

  console.log("Test feature: It can return a list of notes")
  assert.isTrue(Array.isArray(noteList.all));
};

returnsAllNotes();


function storesANote() {
  var noteList = new NoteList();

  console.log("Test feature: It can add new notes")
  noteList.add();
  assert.isTrue(noteList.all.includes("My favourite language is Javascript"))
};
storesANote();