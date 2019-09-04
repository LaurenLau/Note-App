'use strict';

function convertsNoteListToHTML() {
  var noteListView = new NoteListView();
  var noteList = new NoteList();
  console.log("Test feature: It can convert an array to HTML")

  noteList.add("New note");
  noteList.add("My favourite language is JS");
  // assert.isTrue();
};

convertsNoteListToHTML();
