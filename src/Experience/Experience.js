import * as THREE from 'three';
import Sizes from "./Utils/Sizes.js";
import Time from './Utils/Time.js'
import Camera from './Camera.js';


let instance = null;

export default class Experience {
    constructor() {

        // if there is already an instance, return it
        if (instance) {
            return instance;
        }
        // set the instance to this
        instance = this;

        // global access to the experience instance
        window.experience = this;

        // options
        this.canvas = this.canvas

        // setup
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.camera = new Camera();

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
this.camera.resize();
    }

    update() {
this.camera.update();
    }
}