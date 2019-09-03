'use strict';

(function(exports) {
  function NoteList() {
    this.all = []
  };

  var newNote = new Note();

  NoteList.prototype.all = function(){
    return this.all;
  }

  NoteList.prototype.add = function(string){
    var newNote = new Note(string)
    return this.all.push(newNote.text);
  }

  exports.NoteList = NoteList;
  })(this);