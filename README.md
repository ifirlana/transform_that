# transform that

it will be handle exist and transform text, handle exist object.

## Getting started

`var transform_that = require('transform-that');`


## list functions

### .look_string_in_object
`.look_string_in_object()` look a string variable inside object.
````
var sample_object = {
    "hello" : {
        "world": {
            "find_me": "yeah"
        }
    }
}
````
use like this
````
transform_that
.look_string_in_object(sample_object, "hello.world.find_me")
.then(function(response) {
    console.log(response);
});
````

it is returning `yeah`

what if use like this

````
transform_that
.look_string_in_object(sample_object, "hello.world")
.then(function(response) {
    console.log(response);
});
````

it is returning  `{ "find_me": "yeah" }`



### .number_into_rupiah

`.number_into_rupiah()` change int into string formatted rupiah.

sample code

````
var sample_number = 1508000;
````

and use like this

````
transform_that
    .number_into_rupiah(sample_number)
    .then(function(response) {
        console.log(response);
    });
````

it will be return `Rp. 1.508.000`.
the function only accept int data type

````
var sample_string = "1234415667";
````
if you use like this
````
transform_that
    .number_into_rupiah(sample_string)
    .then(function(response) {
        console.log(response);
    });
````

it will be show `undefined`


## event

#### .then

`.then()` handle response success asynchronous callback with method chaining


#### .catch
`.catch()` handle throw error for using `Promise` 


further detail you can check [documentation](https://www.promisejs.org/)