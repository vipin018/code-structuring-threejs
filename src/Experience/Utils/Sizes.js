import EventEmitter from "./EventEmitter.js";

export default class Sizes extends EventEmitter {
    constructor(){

        super();
        // setup
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        // resize event
        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);

            this.trigger("resize")
        });
    }
}