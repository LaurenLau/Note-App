'use strict';

(function(exports) {

  function Note(string) {
    this.text = string;
  };

  exports.Note = Note;
  })(this);
  // let array = (this._noteList.displayAllNotes().map(x => "<li><div>" + x._text + "</div></li>").join(""));
//     let htmlArray = "<ul>" + array + "</ul>"
//     return htmlArray
// var array = this.noteList.view().map( x => "<li><div>" + x.text + "</div></li>").join("");
// var html = "<ul>" + array + "</ul>";
// return html;