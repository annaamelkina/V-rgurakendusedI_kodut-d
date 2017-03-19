
window.onload = function() {
    var kuulid = document.querySelectorAll('div.bead');
    var i;
    for (i = 0; i < kuulid.length; i = i + 1) {
        kuulid[i].onclick = function() {
            "use strict";
            var asend = window.getComputedStyle(this).cssFloat;

            console.log(asend);

            if (asend === "right") {
                this.style.cssFloat = "left";
            } else {
                this.style.cssFloat = "right";
            }
        }
    }
};
