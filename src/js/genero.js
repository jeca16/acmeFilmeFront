'use strict'

var btn = document.getElementById("btn");
    var div = document.getElementById("container");
    btn.addEventListener("click", function () {
        if (div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }

    })


    