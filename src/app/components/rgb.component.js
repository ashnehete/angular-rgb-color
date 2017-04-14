"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var RgbComponent = (function () {
    function RgbComponent() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
    }
    RgbComponent.prototype.keyupColor = function () {
        this.correctValues();
        var colorBlock = document.getElementById('color-block');
        colorBlock.style.backgroundColor = this.getRgbString();
    };
    RgbComponent.prototype.changeColor = function () {
        if (this.r === null) {
            this.r = 0;
        }
        if (this.g === null) {
            this.g = 0;
        }
        if (this.b === null) {
            this.b = 0;
        }
    };
    RgbComponent.prototype.getRgbString = function () {
        return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
    };
    RgbComponent.prototype.correctValues = function () {
        if (this.r > 255) {
            this.r = 255;
        }
        else if (this.r < 0) {
            this.r = 0;
        }
        if (this.g > 255) {
            this.g = 255;
        }
        else if (this.g < 0) {
            this.g = 0;
        }
        if (this.b > 255) {
            this.b = 255;
        }
        else if (this.b < 0) {
            this.b = 0;
        }
    };
    return RgbComponent;
}());
RgbComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rgb',
        templateUrl: 'rgb.component.html'
    }),
    __metadata("design:paramtypes", [])
], RgbComponent);
exports.RgbComponent = RgbComponent;
//# sourceMappingURL=rgb.component.js.map