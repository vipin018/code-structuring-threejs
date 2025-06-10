import * as THREE from "three";
import Experience from "../Experience.js";
export default class Environment {

    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.setSunlight();

        this.setAmbientLight();
    }

    setSunlight() {
        this.sunlight = new THREE.DirectionalLight('#ffffff', 3);
        this.sunlight.castShadow = true;
        this.sunlight.shadow.mapSize.set(1024, 1024);
        this.sunlight.shadow.camera.far = 15;
        this.sunlight.shadow.normalBias = 0.05;
        this.sunlight.position.set(5, 5, -2);
        this.scene.add(this.sunlight);

       
    }

    setAmbientLight() {
        this.ambientLight = new THREE.AmbientLight('#ffffff', 0.5);
        this.scene.add(this.ambientLight);
    }
}