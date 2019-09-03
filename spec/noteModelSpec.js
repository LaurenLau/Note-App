'use strict';

function testNoteHasTextProperty() {
    var note = new Note();

    console.log("Test feature: It has a text property")
    assert.isTrue(note.text === "My favourite language is Javascript") 
  };

  testNoteHasTextProperty();
