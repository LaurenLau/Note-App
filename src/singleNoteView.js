
(function(exports) {
  function SingleNoteView(model) {
    this.note = model
  };

  SingleNoteView.prototype.convert = function() {
    var html = this.note.view().map( x => "<div>" + x + "</div>");
    var note = html
    return note;
  }

  exports.SingleNoteView = SingleNoteView;
})(this);