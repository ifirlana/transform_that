/**
 * Created by ikhlasfirlana on 9/7/17.
 */
var Promises = require("promise");

var Func = function () {

    return this;
};


// set variable
Func.prototype.set = function (obj) {

    this.object = obj.object;
    this.that_exist = obj.that_exist;

    return this;
};


// process library
Func.prototype.main = function () {

    var this_is_exist = this.object;
    var that_exist = this.that_exist;

    if (typeof that_exist === "string") {

        var tmp = that_exist.split(".");

        for (var i in tmp) {

            if (typeof this_is_exist !== "undefined") {

                this_is_exist = this_is_exist[tmp[i]];

            }

        }
    }

    if (typeof this_is_exist !== "undefined") {
        this.result = this_is_exist;
    }

    return this;
};


// get result
Func.prototype.get = function () {

    if (typeof this.result === "undefined") {

        this.result = [];

    }

    return this.result;
};


// method chaining
Func.prototype.then = function (callback) {
    var that = this;

    callback(that.get());

    return this;
};


// export
var look_string_in_object = function (object, that_exist) {

    var func = new Func();
    return func
        .set({
            object: object,
            that_exist: that_exist
        })
        .main();
};


exports.func = Func;
module.exports = look_string_in_object;