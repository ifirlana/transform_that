/**
 * Created by ikhlasfirlana on 9/11/17.
 */

var Promises = require("promise");


var loop = function (this_loop_function, until) {

    var that = {};
    that.check = "";


    that.loop_main = function () {

        that.check = "";

        return new Promises(function (resolve, reject) {

            if (that.check !== until) {

                this_loop_function()
                    .then(that.loop_until)
                    .catch(reject);

            } else {

                resolve(that.check);

            }

        })

    };


    that.loop_until = function () {

        return new Promises(function (resolve, reject) {

            if (that.check !== until) {

                this_loop_function()
                    .then(function (value) {

                        that.check = value;

                    })
                    .then(that.loop_until);

            } else {

                resolve(that.check);

            }

        })

    };

    return that;
};


module.exports = loop;