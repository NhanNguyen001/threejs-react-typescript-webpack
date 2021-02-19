import React, { useLayoutEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Cube = () => {
    // Create cube function
    const createCube = (scene: THREE.Scene, cube: THREE.Mesh) => {
        scene.add(cube);
    };

    useLayoutEffect(() => {
        // create the scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        scene.background = new THREE.Color(0xffffee);
        const controls = new OrbitControls(camera, renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00a1cb });
        const cube = new THREE.Mesh(geometry, material);

        const ADD = 0.1;

        function init() {
            const axes = new THREE.AxesHelper(5);
            scene.add(axes);
            camera.position.z = -10;

            controls.update();

            createCube(scene, cube);

            renderer.setSize(window.innerWidth, window.innerHeight - 100);

            document.body.appendChild(renderer.domElement);
        }

        // Animatie function
        function animate() {
            cube.rotation.y += ADD;

            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        init();
        animate();
    });

    return <div />;
};
