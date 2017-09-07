/**
 * Created by ikhlasfirlana on 9/7/17.
 */


module.exports = function (number) {

        return new Promise(function (resolve, reject) {

            try {

                var temp;

                if (typeof number === "number") {

                    var value = parseFloat(number).toFixed(2);

                    value = value * 1;

                    var rev     = value.toString().split("").reverse().join("");
                    var rev2    = "";

                    for (var i = 0; i < rev.length; i++){

                        rev2  += rev[i];

                        if((i + 1) % 3 === 0 && i !== (rev.length - 1)){

                            rev2 += ".";

                        }

                    }

                    temp = "Rp. " + rev2.split("").reverse().join("");

                }

                resolve(temp);

            } catch (e) {

                reject(e);

            }
        });
};