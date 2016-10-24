/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TimerElement = (function (_super) {
    __extends(TimerElement, _super);
    function TimerElement() {
        _super.apply(this, arguments);
    }
    TimerElement.prototype.handleStart = function () {
        var _this = this;
        if (!this.running) {
            this.timerHandle = setInterval(function () {
                _this.time++;
            }, 1000);
            this.running = true;
        }
    };
    TimerElement.prototype.handlePause = function () {
        clearInterval(this.timerHandle);
        this.running = false;
    };
    TimerElement.prototype.handleReset = function () {
        clearInterval(this.timerHandle);
        this.time = 0;
    };
    __decorate([
        property({ type: Number, value: 0 })
    ], TimerElement.prototype, "time", void 0);
    __decorate([
        property({ type: Boolean, value: false })
    ], TimerElement.prototype, "running", void 0);
    __decorate([
        listen("handle-start")
    ], TimerElement.prototype, "handleStart", null);
    __decorate([
        listen("handle-pause")
    ], TimerElement.prototype, "handlePause", null);
    __decorate([
        listen("handle-reset")
    ], TimerElement.prototype, "handleReset", null);
    TimerElement = __decorate([
        /// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
        component("timer-element")
    ], TimerElement);
    return TimerElement;
}(polymer.Base));
TimerElement.register();
//# sourceMappingURL=timer-element.js.map