"use strict";
var that = this;
fetch('https://jsonplaceholder.typicode.com/todos/1?cache=' + new Date().getTime())
    .then(response => response.json())
    .then(response => {
        console.log(this);
    });

fetch('https://jsonplaceholder.typicode.com/todos/1?cache=' + new Date().getTime())
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
            console.log(that);
        }
    );