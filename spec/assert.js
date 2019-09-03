'use strict';

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: Is " + assertionToCheck );
    }
    else {
      console.log("Assertion passed: Is " + assertionToCheck )
    }
  },
  
};

