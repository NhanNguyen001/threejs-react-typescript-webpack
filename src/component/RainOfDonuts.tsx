/* eslint-disable no-param-reassign */
import React, { useLayoutEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const RainOfDonuts = () => {
    const randomInRange = (from: number, to: number): number => {
        const x = Math.random() * (to - from);
        return x + from;
    };

    useLayoutEffect(() => {
        const ADD = 0.1;
        const donuts: THREE.Mesh[] = [];
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 20;
        camera.position.y = -10;

        // create the renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        const controls = new OrbitControls(camera, renderer.domElement);

        // init function
        function init() {
            const axes = new THREE.AxesHelper(5);
            scene.add(axes);
            controls.update();
            renderer.setSize(window.innerWidth, window.innerHeight - 100);
            document.body.appendChild(renderer.domElement);
        }

        // Animatie function
        function animate() {
            const x = Math.random();

            if (x < 0.01) {
                // create Donut
                const geometry = new THREE.TorusGeometry(1, 0.5, 5, 30);
                const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff, wireframe: true });
                const d = new THREE.Mesh(geometry, material);

                d.position.x = randomInRange(-15, 15);
                d.position.z = randomInRange(-15, 15);
                d.position.y = 15;

                scene.add(d);
                donuts.push(d);
            }

            // eslint-disable-next-line no-return-assign
            donuts.forEach((donut) => donut.position.y -= ADD);

            controls.update();

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        init();
        animate();
    });

    return <div />;
};
