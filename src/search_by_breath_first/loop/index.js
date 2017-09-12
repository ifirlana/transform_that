/**
 * Created by ikhlasfirlana on 9/11/17.
 */

var Promises = require("promise");


var loop = function (this_loop_function, until) {

    var that = {};
    that.check = "";
    that.string = "";


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


    that.loop_here = function (this_obj, this_string) {

        var array_object = Object.keys(this_obj);
        that.loop_here_check(this_obj, array_object, this_string, 0);

    };


    that.loop_here_check = function (this_obj, array_object, this_string, i) {


        // check object exist and founded string
        if (typeof array_object[i] !== "undefined" && array_object[i] !== this_string) {

            console.log(":i:" + i + ":" + array_object[i]);

            var result_found = that.loop_here_check(this_obj, array_object, this_string, i + 1);

            if (typeof result_found === "undefined") {

                var j = i + 1;
                var tmp_object = array_object.length - j;
                // console.log("result_found : ", tmp_object, array_object[tmp_object]);

                var and_this_obj = this_obj[array_object[tmp_object]];
                var and_this_string = this_string;
                var and_array_object = Object.keys(and_this_obj);


                console.log("result_found : ", and_array_object[j], and_this_obj, and_array_object);
                // console.log("result_again : ", and_this_obj[and_array_object[tmp_object]]);

                return that.loop_here_check(and_this_obj, and_array_object, this_string, j);

            }

        } else if (array_object[i] === this_string) {

            console.log("array_object[i] === this_string ", array_object[i]);
            return array_object[i];

        } else {

            return undefined;

        }

    };

    return that;
};


module.exports = loop;