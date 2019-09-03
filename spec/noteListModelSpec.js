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
  noteList.add("New note");
  console.log(noteList.all)
  assert.isTrue(noteList.all.includes("New note"))
};
storesANote();