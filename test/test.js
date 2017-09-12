/**
 * Created by ikhlasfirlana on 9/7/17.
 */
const transform_that = require("../index");


var sample_object = {
    "hello" : {
        "world": {
            "find_me": "yeah"
        }
    }
};


// test for .look_string_in_object()
transform_that
    .look_string_in_object(sample_object, "hello.world.find_me")
    .then(function(response) {
        console.log(response);
    });

transform_that
    .look_string_in_object(sample_object, "hello.world")
    .then(function(response) {
        console.log(response);
    });

transform_that
    .look_string_in_object(sample_object, "hello.world.find_me.yeah")
    .then(function(response) {
        console.log(response);
    });


// test for number_into_rupiah
var sample_number = 1508000;
var sample_string = "1234415667";

transform_that
    .number_into_rupiah(sample_number)
    .then(function(response) {
        console.log(response);
    });


transform_that
    .number_into_rupiah(sample_string)
    .then(function(response) {
        console.log(response);
    });


// scene search by breath first
var obj = {
    "first": {
        "third": {
            "result": "FOUND IT!"
        },
        "fifth": {}
    },
    "second": {
        "wrong_way": "NOT FOUND!"
    },
    "fourth" : {}
};

transform_that.search_by_breath_first(obj, "fifth")
    .then(function (value) {
        console.log(value);
    });