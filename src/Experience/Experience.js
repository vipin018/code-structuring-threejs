import * as THREE from 'three';
import Sizes from "./Utils/Sizes.js";
import Time from './Utils/Time.js'
import Camera from './Camera.js';

export default class Experience {

    constructor(canvas) {

        // Global access to the experience instance
        window.experience = this;

        // options
        this.canvas = canvas;

        // setup
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.Camera = new Camera();

        // sizes resize event
        this.sizes.on('resize', () => {
            this.resize();
        });

        this.time.on('tick', () => {
            this.update();
        });
    }
    resize() {

    }

    update() {
        // console.log("update the experience");
    }
}