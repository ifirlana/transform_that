/**
 * Created by ikhlasfirlana on 9/11/17.
 */

var Promises = require("promise");


// constructor
var loop = function () {

    this.that_object = {};
    this.that_until = "";

};


// set variable into local variable
loop.prototype.set = function (this_object_first, this_until_die) {

    this.that_object = this_object_first;
    this.that_until = this_until_die;

    return this;

};


// check status variable local
loop.prototype.check = function () {


    console.log(":this ", this);

    return this;
};


// show how this function works!
loop.prototype.run = function () {



    this.main();


    return this;
};


loop.prototype.main = function () {

    var set_array_object = Object.keys(this.that_object);

    console.log(":main:set_array_object ", set_array_object);

    if (set_array_object.length > 0) {

        console.log(":main:OK");
        this.main_loop("", this.that_object, set_array_object, 0);

    }

    return this;
};


loop.prototype.main_loop = function (path, object_from, check_this_property, iterate) {
    console.log(":main_loop:", iterate);
    console.log(":main_loop:exist ", object_from.hasOwnProperty(check_this_property[iterate]));

    if (object_from.hasOwnProperty(check_this_property[iterate]) === true && check_this_property[iterate] !== this.that_until) {

        path += check_this_property[iterate]+ ".";

        console.log(":main_loop:", iterate, JSON.stringify(check_this_property));
        console.log(":main_loop:", iterate, JSON.stringify(object_from));
        console.log(":main_loop:path ", path);

        var child_iterate = iterate + 1;
        this.main_loop(path, object_from, check_this_property, child_iterate);

    } else if (check_this_property[iterate] === this.that_until) {



    }
    // if (well_object.hasOwnProperty(well_property) === true) {
    //
    //     var child = well_object[well_property];
    //     var set_array_object_child = Object.keys(child);
    //     var iterate_child = iterate + 1;
    //
    //     console.log(":main_loop:iterate_child ", iterate_child);
    //     console.log(":main_loop:child", child );
    //     console.log(":main_loop:set_array_object_child ", set_array_object_child[0]);
    //
    //     main_loop(child, set_array_object_child[0], iterate_child);
    //
    // }

};



// init directly if require
module.exports = new loop();