/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />

@component("timer-element")
class TimerElement extends polymer.Base
{

    @property({ type: Number, value: 0 })
    private time: number;

    @property({ type: Boolean, value: false })
    private running: boolean;

    private timerHandle: number;

    @listen("handle-start")
    handleStart () {
        if (!this.running) {
            this.timerHandle = setInterval(() => {
                this.time++;
            }, 1000);
            this.running = true;
        }
    }

    @listen("handle-pause")
    handlePause () {
        clearInterval(this.timerHandle);
        this.running = false;
    }

    @listen("handle-reset")
    handleReset () {
        clearInterval(this.timerHandle);
        this.time = 0;
    }
}

TimerElement.register();