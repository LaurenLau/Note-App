'use strict';

(function(exports) {
  function NoteList() {
    this.all = [];
  };

  NoteList.prototype.add = function(string){
    var newNote = new Note(string)
    return this.all.push(newNote.text);
  }

  NoteList.prototype.view = function(){
    return this.all;
  }


  exports.NoteList = NoteList.prototype.constructor = NoteList;
  })(this);