'use strict';

(function(exports) {
  function NoteList() {
    this.all = []
  };
  var newNote = new Note();

  NoteList.prototype.notes = function(){
    return this.all;
  }

  NoteList.prototype.add = function(){
    return this.all.push(newNote.text);
  }

  exports.NoteList = NoteList;
  })(this);