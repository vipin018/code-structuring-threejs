import * as THREE from 'three';
import Sizes from "./Utils/Sizes.js";
import Time from './Utils/Time.js'
import Camera from './Camera.js';
import Renderer from './Renderer.js';
import World from './World/World.js';

let instance = null;

export default class Experience {
    constructor(canvas) {

        // if there is already an instance, return it
        if (instance) {
            return instance;
        }
        // set the instance to this
        instance = this;

        // global access to the experience instance
        window.experience = this;

        // options
        this.canvas = canvas

        // setup
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.world = new World();


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
        this.renderer.resize();
    }

    update() {
        this.camera.update();
        this.renderer.update();
    }
}