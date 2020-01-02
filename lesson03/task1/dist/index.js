"use strict";

require("core-js/modules/es.array.flat");

require("core-js/modules/es.array.unscopables.flat");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.promise.finally");

var data = [1, 2, [3, 4, [5, 6]]];
var result = data.flat(2);
console.log(result);
Promise.resolve().finally();