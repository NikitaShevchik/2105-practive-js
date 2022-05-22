"use strict"

const quadraticA = document.querySelector(".quadratic__a");
const quadraticB = document.querySelector(".quadratic__b");
const quadraticC = document.querySelector(".quadratic__c");
const quadraticButton = document.querySelector(".quadratic__button");

quadraticButton.addEventListener("click", function (e) {
    var a = quadraticA.value;
    var b = quadraticB.value;
    var c = quadraticC.value;

    var D = (b * b) - 4 * (a * c);
    console.log(D);


});
