"use strict"

const quadraticA = document.querySelector(".quadratic__a");
const quadraticB = document.querySelector(".quadratic__b");
const quadraticC = document.querySelector(".quadratic__c");
const quadraticButton = document.querySelector(".quadratic__button");
const discriminant = document.querySelector(".roots__discriminant")
const firstRoot = document.querySelector(".roots__first");
const secondRoot = document.querySelector(".roots__second")

quadraticButton.addEventListener("click", function (e) {
    var a = quadraticA.value;
    var b = quadraticB.value;
    var c = quadraticC.value;

    var D = (b * b) - 4 * (a * c);
    console.log(D);
    discriminant.innerHTML = `Корень дискриминанта = ${D}`;
});
