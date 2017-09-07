/**
 * Created by ikhlasfirlana on 9/7/17.
 */
module.exports = function (object, that_exist) {
    "use strict";

    return new Promise(function (resolve, reject) {

        try {

            var this_is_exist = object;

            if (typeof that_exist === "string") {

                var tmp = that_exist.split(".");

                for (var i in tmp) {

                    if (typeof this_is_exist !== "undefined") {

                        this_is_exist = this_is_exist[tmp[i]];

                    }

                }
            }

            if (typeof this_is_exist !== "undefined") {

                resolve(this_is_exist);

            } else {

                resolve();

            }

        } catch (e) {

            // console.log(":look_string_in_object:run_exist e", e);
            reject(e);

        }
    });

};