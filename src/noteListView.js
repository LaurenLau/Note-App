'use strict';

(function(exports) {
  function NoteListView(model) {
    this.noteList = model
  };

  NoteListView.prototype.convert = function(){
    var html = '<ul><li><div>';
    
    this.noteList.view().map(function(note) {
      html += note;
      html += '</div></li><li><div>';
    });
    html += '</div></li></ul>';
    return html;
  }


  exports.NoteListView = NoteListView;
})(this);