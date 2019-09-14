'use strict';

function convertsNoteListToHTML() {
  console.log("Test feature: It can convert an array to HTML")
  
  var noteList = new NoteList();
  noteList.add("New note");
  noteList.add("New note two");

  var view = new NoteListView(noteList);
  assert.isTrue( view.convert(noteList) === '<ul><li><div>New note</div></li><li><div>New note two</div></li></ul>');
}

convertsNoteListToHTML();
