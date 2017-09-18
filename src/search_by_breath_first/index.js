/**
 * Created by ikhlasfirlana on 9/11/17.
 */

var Promises = require("promise");
var Loop = require("./loop/loop");


// init
var search_by_breath_first = function (this_json_object, this_string) {
    "use strict";

    var that = {};
    var loop = new Loop();

    //  temporary data
    that.empty_string = "";


    // construct
    that.set = function () {

        return new Promises(function (resolve, reject) {

            that.empty_string = "";

            resolve(that);

        });
    };


    // function check
    // that.check_beta_test = function (this_obj, this_string, i) {
    //
    //     return new Promises(function (resolve, reject) {
    //
    //         if  (typeof i === "undefined") {
    //             i = 0;
    //         }
    //
    //         var arr_obj = Object.keys(this_obj);
    //
    //         if (typeof this_obj === "object" && typeof this_obj[arr_obj[i]] !== "undefined") {
    //
    //             // that.check(this_obj[0]);
    //             console.log(":arr_obj:i:"+i, arr_obj[i], this_obj[arr_obj[i]]);
    //
    //             // resolve(i++);
    //             that.check(this_obj[arr_obj[i]], this_string, i);
    //
    //         } else if (typeof this_obj[arr_obj[i + 1]] !== "undefined") {
    //
    //             that.check(this_obj[arr_obj[i]], this_string, i + 1);
    //
    //         } else {
    //
    //             resolve();
    //
    //         }
    //
    //
    //         if (that.empty_string !== "") {
    //             that.empty_string = that.empty_string.substring(0, that.empty_string.length-1);
    //         }
    //
    //         resolve(that.empty_string);
    //
    //     });
    //
    // };


    // main function
    that.run = function () {

        return new Promises(function (resolve, reject) {

           try {

                   that.set()
                       .then(function (value) {

                           return loop
                               .set(this_json_object, this_string)
                               .run()
                               .get_result();

                       })
                       .then(function (value) {

                           resolve(value);

                       })
                       .catch(function (reason) {

                           console.log(":search_by_breath_first:catch e", reason);
                           resolve([]);

                       });

           } catch (e) {
               console.log(":search_by_breath_first e", e);
               reject(e);
           }

       })
    };

    return that.run();

};


exports.func = Loop;
module.exports = search_by_breath_first;