import * as THREE from 'three';
import Sizes from "./Utils/Sizes.js";
import Time from './Utils/Time.js'
// import Camera from './Camera.js';


export default class Experience {
    constructor() {

        // global access to the experience instance
        window.experience = this;

        // options
        this.canvas = this.canvas

        // setup
        this.sizes = new Sizes();
        this.time = new Time();

        //sizes resize event
        this.sizes.on("resize", () => {
            this.resize();
        });
        // time update event
        this.time.on("update", () => {
            this.update();
        });

    }
    resize() {

    }

    update() {

    }
}