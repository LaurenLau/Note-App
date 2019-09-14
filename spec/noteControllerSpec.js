'use strict';

function controlsApplication() {
  console.log("Test feature: It can control of the application functions")
  
  var ctrl = new NoteController();
  // assert.isTrue( ctrl.control() === '<ul><li><div>Hello</div></li><li><div>Hi</div></li><li><div>Hey</div></li></ul>');
};
controlsApplication();
