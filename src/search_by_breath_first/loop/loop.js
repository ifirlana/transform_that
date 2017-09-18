/**
 * Created by ikhlasfirlana on 9/11/17.
 */

var Promises = require("promise");


// constructor
var loop = function () {

    this.that_object = {};
    this.that_until = "";
    this.result_array = [];

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


    this.breath_first_main();


    return this;
};


loop.prototype.breath_first_main = function () {

    var object_local = this.that_object;

    var array = Object.keys(object_local);

    // check if property same like expected
    if (array.length > 0) {

        // first steps
        this.breath_first_main_first_phase("", object_local);

    }

    return this;
};

loop.prototype.get_result = function () {

    return this.result_array;
};


loop.prototype.breath_first_main_first_phase = function (path, object_local) {

    var _object = Object.keys(object_local);
    var k = 0;
    while (k < _object.length) {

        // first steps
        var j = _object[k];
        var _path = path+j+".";

        // console.log(_path, JSON.stringify(object_local[j]));

        var object_tree = object_local[j];

        if (typeof object_tree === "object" && Object.keys(object_tree).length > 0) {

            // second steps
            var second_steps = Object.keys(object_tree);
            if (second_steps.length > 0) {

                // second steps
                var found_in_properties = this.breath_first_main_find_in_properties(second_steps, this.that_until);
                if (found_in_properties === false) {

                    var check = this.breath_first_main_first_phase(_path, object_tree);
                    if (check === true){
                        k = _object.length;
                    }

                } else {

                    // console.log("FOUND!!!! ", _path+second_steps[found_in_properties]+".");
                    this.result_array.push(_path+second_steps[found_in_properties]);
                    k = _object.length;
                    return true;

                }

            }

        } else if (typeof object_tree === "string" && object_tree === this.that_until) {

            k = _object.length;
            return true;

        }

        k++;

    }

    return this;
};


// check properties same like the finder
loop.prototype.breath_first_main_find_in_properties = function (steps, until) {
    var k = 0;
    var set;

    while (k < steps.length) {

        if (steps[k] === until) {

            set = k;
            k = steps.length;
        }

        k++;
    }

    if (typeof set === "undefined") {

        return false;

    } else {

        return set;

    }
};


// Breath First Search
// Sections
loop.prototype.main = function () {

    var set_array_object = Object.keys(this.that_object);

    // console.log(":main:set_array_object ", set_array_object);

    if (set_array_object.length > 0) {

        // console.log(":main:OK");
        this.main_loop("", this.that_object, set_array_object, 0);

    }

    return this;
};


loop.prototype.main_loop = function (path, object_from, check_this_property, iterate) {
    console.log(":main_loop:", iterate);
    console.log(":main_loop:exist ", object_from.hasOwnProperty(check_this_property[iterate]));

    var check_found = false;

    if (object_from.hasOwnProperty(check_this_property[iterate]) === true && check_this_property[iterate] !== this.that_until) {

        path += check_this_property[iterate]+ ".";

        console.log(":main_loop:", iterate, JSON.stringify(check_this_property));
        console.log(":main_loop:", iterate, JSON.stringify(object_from));
        console.log(":main_loop:path ", path);

        var child_iterate = iterate + 1;
        this.main_loop(path, object_from, check_this_property, child_iterate);

    } else if (check_this_property[iterate] === this.that_until) {


        check_found = true;

    }

};



// init directly if require
module.exports = loop;