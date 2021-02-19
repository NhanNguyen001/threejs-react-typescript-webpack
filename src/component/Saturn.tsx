/* eslint-disable no-param-reassign */
import React, { useLayoutEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const Saturn = () => {
    useLayoutEffect(() => {
        let ADD = 0.01;
        const rings: THREE.Mesh[] = [];
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 20;

        // create the renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        const controls = new OrbitControls(camera, renderer.domElement);

        let geometry = null;
        let material = null;

        // create saturn
        geometry = new THREE.SphereGeometry(4, 30, 30);
        material = new THREE.MeshBasicMaterial({ color: 0x8d5524 });
        const plannet = new THREE.Mesh(geometry, material);
        scene.add(plannet);

        geometry = new THREE.TorusGeometry(5.1, 0.7, 2, 50);
        material = new THREE.MeshBasicMaterial({ color: 0xffe39f });
        let ring = new THREE.Mesh(geometry, material);
        rings.push(ring);

        geometry = new THREE.TorusGeometry(6.9, 0.7, 2, 50);
        material = new THREE.MeshBasicMaterial({ color: 0xffad60 });
        ring = new THREE.Mesh(geometry, material);
        rings.push(ring);

        geometry = new THREE.TorusGeometry(8.5, 0.7, 2, 50);
        material = new THREE.MeshBasicMaterial({ color: 0xeac086 });
        ring = new THREE.Mesh(geometry, material);
        rings.push(ring);

        rings.forEach((r) => {
            r.rotation.x = 1.7;
            r.rotation.y = 0.5;
            scene.add(r);
        });

        // init function
        function init() {
            const axes = new THREE.AxesHelper(10);
            scene.add(axes);
            controls.update();
            renderer.setSize(window.innerWidth, window.innerHeight - 100);
            document.body.appendChild(renderer.domElement);
        }

        // main animation loop - calls 50-60 times per second.
        function mainLoop() {
            camera.position.y += ADD;
            if (camera.position.y >= 5 || camera.position.y <= -5) { ADD *= -1; }

            renderer.render(scene, camera);

            // controls.update();

            requestAnimationFrame(mainLoop);
        }

        /// ////////////////////////////////////////////
        init();
        mainLoop();
    });

    return <div />;
};
