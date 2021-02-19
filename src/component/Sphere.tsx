import React, { useLayoutEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Sphere = () => {
    useLayoutEffect(() => {
        // create the scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        // scene.background = new THREE.Color(0xffffee);
        const controls = new OrbitControls(camera, renderer.domElement);

        const ADD = 0.01;

        const geometry = new THREE.SphereGeometry(5, 30, 30, 0, Math.PI);

        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        function init() {
            const axes = new THREE.AxesHelper(5);
            scene.add(axes);
            camera.position.z = -10;

            controls.update();

            renderer.setSize(window.innerWidth, window.innerHeight - 100);

            document.body.appendChild(renderer.domElement);
        }

        // Animatie function
        function animate() {
            // sphere.rotation.x += ADD;
            sphere.rotation.y += ADD;
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        init();
        animate();
    });

    return <div />;
};
