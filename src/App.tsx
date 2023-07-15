import './App.css';
import React, { FunctionComponent, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { vertexShader, fragmentShader } from './shader';

interface THREEProps { }

const THREEScene: FunctionComponent<THREEProps> = (props) => {
	const canvasRef = useRef<HTMLCanvasElement>(null!);

	const clock = new THREE.Clock();

	const shaderUniforms = {
		u_time: { value: 0.0 },
		u_resolution: {
			value: {
				x: window.innerWidth * window.devicePixelRatio,
				y: window.innerHeight * window.devicePixelRatio
			}
		}
	}

	const render = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera, orbitControls: OrbitControls) => {
		renderer.render(scene, camera);
		orbitControls.update();

		const delta = clock.getDelta();
		const elapsed = clock.getElapsedTime();

		shaderUniforms.u_time.value = elapsed;

		requestAnimationFrame(() => render(renderer, scene, camera, orbitControls));
	};

	useEffect(() => {
		const scene = new THREE.Scene();
		const renderer = new THREE.WebGLRenderer({
			canvas: canvasRef.current,
			antialias: true
		});
		renderer.setClearColor(new THREE.Color(0x6dab6b));
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
		camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
		const orbitControls = new OrbitControls(camera, renderer.domElement);

		orbitControls.autoRotate = false;
		orbitControls.autoRotateSpeed = 1;
		orbitControls.enableDamping = true;
		orbitControls.dampingFactor = .01;
		orbitControls.update();

		const directionalLight = new THREE.DirectionalLight(new THREE.Color(0xffffff), 1);
		scene.add(directionalLight);

		const ambientLight = new THREE.AmbientLight(new THREE.Color(0xffffff), 1);
		scene.add(ambientLight);

		const shaderMaterial = new THREE.ShaderMaterial({
			uniforms: shaderUniforms,
			vertexShader: vertexShader,
			fragmentShader: fragmentShader
		});

		const loader = new GLTFLoader();
		const assets3D: (THREE.Group | THREE.Mesh)[] = [];

		loader.load('/housewithoutplane.glb', (gltf) => {
			const object3D = gltf.scene;
			scene.add(object3D);
			assets3D.push(object3D);
			object3D.scale.set(0.1, 0.1, 0.1);
			object3D.position.set(-0.5, 0, 0);
		});

		camera.lookAt(0, 0, 0);
		orbitControls.target.set(0, 0, 0);
		const offset = 0.1;
		orbitControls.minPolarAngle = Math.PI / 4 - offset;
		orbitControls.maxPolarAngle = Math.PI / 4 + offset * 5;
		orbitControls.update();
		orbitControls.enableZoom = false;

		camera.position.z = 5;
		renderer.setSize(window.innerWidth, window.innerHeight);
		requestAnimationFrame(() => render(renderer, scene, camera, orbitControls));
		window.onresize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			renderer.setSize(width, height);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		}
	});

	return (
		<canvas ref={canvasRef} />
	)
};

const App = () => {
	return (
		<div>
			<THREEScene />
		</div>
	)
};

export default App;