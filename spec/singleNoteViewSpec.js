'use strict';

function convertsNoteListToHTML() {
  console.log("Test feature: It can convert a single note into HTML")
  
  var noteList = new NoteList();
  noteList.add("New note");

  var view = new SingleNoteView(noteList);
  console.log(view.convert(noteList))
 // assert.isTrue( view.convert(noteList) === ["<div>New note</div>"] );
}

convertsNoteListToHTML();
