'use strict';

(function(exports) {
  function NoteListView(model) {
    this.noteList = model
  };

  NoteListView.prototype.convert = function(){
   
    var array = this.noteList.view().map( x => "<li><div>" + x + "</div></li>").join("");
    var html = "<ul>" + array + "</ul>";
    return html;
  }


  exports.NoteListView = NoteListView;
})(this);
