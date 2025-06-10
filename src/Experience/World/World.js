import * as THREE from 'three';
import Experience from '../Experience.js';
import Environment from './Enviroment.js';
export default class World {

    constructor() {
        this.experience = new Experience;
        this.scene = this.experience.scene;

        // test mesh
        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial({
                // wireframe: true
                metalness: 0.7,
                roughness: 0.2,
            })
        );
        this.scene.add(testMesh);
        testMesh.scale.set(2, 2, 2);

        // setup environment
        this.environment = new Environment();
        // this.environment.setSunlight();
    }
}