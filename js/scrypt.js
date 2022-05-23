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

    if (D < 0) {
        discriminant.innerHTML = `Дискриминант = ${D} <p>Дискриминант < 0</p> <p>Корней нет</p>`;
    } else if (D == 0) {
        var rootFirst = -1 * (b / 2 * a);
        discriminant.innerHTML = `Дискриминант = ${D} <p>X = ${rootFirst}</p>`;
    } else if (D > 0) {
        var rootFirst = (-b - Math.sqrt(D)) / (2 * a);
        var rootSecond = (-b + Math.sqrt(D)) / (2 * a);
        discriminant.innerHTML = `<p>Дискриминант = ${D}</p> <p>Первый корень X ≈ ${rootFirst.toFixed(3)}</p> <p>Второй корень X ≈ ${rootSecond.toFixed(3)}</p>`;
    }
});
