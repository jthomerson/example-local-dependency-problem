'use strict';

var _ = require('underscore');

module.exports = function() {
   return _.reduce(arguments, function(a, b) {
      return a + b;
   }, 0);
};
