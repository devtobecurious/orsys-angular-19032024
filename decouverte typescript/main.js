"use strict";
var Wookiee = /** @class */ (function () {
    function Wookiee(prenom) {
        this.prenom = prenom;
    }
    Object.defineProperty(Wookiee.prototype, "thePrenom", {
        get: function () {
            return this.prenom;
        },
        set: function (value) {
            this.prenom = value;
        },
        enumerable: false,
        configurable: true
    });
    return Wookiee;
}());
var chewie = new Wookiee('Chewie');
