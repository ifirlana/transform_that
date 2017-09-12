/**
 * Created by ikhlasfirlana on 9/7/17.
 */


var look_string_in_object = require("./src/look_string_in_object");
var number_into_rupiah = require("./src/number_into_rupiah");
var search_by_breath_first = require("./src/search_by_breath_first");


// object json { ... }
// exist string "hello.world.test"
exports.look_string_in_object = look_string_in_object;


// number int 100000
exports.number_into_rupiah = number_into_rupiah;


// get search tree by breath first method
exports.search_by_breath_first = search_by_breath_first;
