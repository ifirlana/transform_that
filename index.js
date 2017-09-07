/**
 * Created by ikhlasfirlana on 9/7/17.
 */


const Promise = require("promise");
const look_string_in_object = require("./src/look_string_in_object");
const number_into_rupiah = require("./src/number_into_rupiah");


// object json { ... }
// exist string "hello.world.test"
exports.look_string_in_object = look_string_in_object;


// number int 100000
exports.number_into_rupiah = number_into_rupiah;
