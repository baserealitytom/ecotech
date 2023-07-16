import './App.css';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import { vertexShader, fragmentShader } from './shader';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';

console.log('url', import.meta.url);

const LoadingScreen: FunctionComponent = () => {
	return (
		<div className='LoadingScreen'>
			<img src='/ecotech/ecotechlogo.png'></img>
			<span>Loading</span>
		</div>
	)
};

const THREEScene: FunctionComponent = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null!);

	//const clock = new THREE.Clock();

	/*const shaderUniforms = {
		u_time: { value: 0.0 },
		u_resolution: {
			value: {
				x: window.innerWidth * window.devicePixelRatio,
				y: window.innerHeight * window.devicePixelRatio
			}
		}
	}*/

	const render = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera, orbitControls: OrbitControls) => {
		renderer.render(scene, camera);
		orbitControls.update();

		//const delta = clock.getDelta();
		//const elapsed = clock.getElapsedTime();

		requestAnimationFrame(() => render(renderer, scene, camera, orbitControls));
	};

	const addRectLight = (width: number, height: number, intensity: number, color: THREE.Color, scene: THREE.Scene, position: THREE.Vector3, rotation: THREE.Euler) => {
		const rectLight = new THREE.RectAreaLight(color, intensity, width, height);
		const rectLightHelper = new RectAreaLightHelper(rectLight);
		rectLight.rotation.copy(rotation);
		rectLight.position.copy(position);
		scene.add(rectLight);
	};

	const addScreenLight = (width: number, height: number, intensity: number, color: THREE.Color, scene: THREE.Scene, position: THREE.Vector3, rotation: THREE.Euler) => {
		//const rectLight = new THREE.RectAreaLight(color, intensity, width, height);
		//const rectLightHelper = new RectAreaLightHelper(rectLight);
		const geometry = new THREE.PlaneGeometry(width, height);
		const material = new THREE.MeshBasicMaterial({ color: color });
		material.side = THREE.DoubleSide;

		const screenLight = new THREE.Mesh(geometry, material);
		screenLight.rotation.copy(rotation);
		screenLight.position.copy(position);
		scene.add(screenLight);

		/*const pointLight = new THREE.PointLight(color, intensity, 1);
		pointLight.position.copy(position);
		scene.add(pointLight);*/
	};

	const addCameraMask = (camera: THREE.PerspectiveCamera, width: number, height: number, color: THREE.Color) => {
		//const rectLight = new THREE.RectAreaLight(color, intensity, width, height);
		//const rectLightHelper = new RectAreaLightHelper(rectLight);
		const geometry = new THREE.PlaneGeometry(width, height);
		const material = new THREE.MeshBasicMaterial({ color: color });
		material.side = THREE.DoubleSide;
		material.colorWrite = false;

		const screenLight = new THREE.Mesh(geometry, material);
		screenLight.renderOrder = 1;
		//screenLight.rotation.copy(rotation);
		screenLight.position.set(width / 2, 0, -0.1);
		camera.add(screenLight);

		/*const pointLight = new THREE.PointLight(color, intensity, 1);
		pointLight.position.copy(position);
		scene.add(pointLight);*/
	};

	const addWindowLight = (width: number, height: number, intensity: number, color: THREE.Color, scene: THREE.Scene, position: THREE.Vector3, rotation: THREE.Euler) => {
		//const rectLight = new THREE.RectAreaLight(color, intensity, width, height);
		//const rectLightHelper = new RectAreaLightHelper(rectLight);
		const geometry = new THREE.PlaneGeometry(width, height);
		const material = new THREE.MeshBasicMaterial({ color: color });
		material.side = THREE.DoubleSide;
		material.colorWrite = false;

		const screenLight = new THREE.Mesh(geometry, material);
		screenLight.rotation.copy(rotation);
		screenLight.position.copy(position);
		scene.add(screenLight);

		/*const pointLight = new THREE.PointLight(color, intensity, 1);
		pointLight.position.copy(position);
		scene.add(pointLight);*/
	};

	useEffect(() => {
		const scene = new THREE.Scene();
		const renderer = new THREE.WebGLRenderer({
			canvas: canvasRef.current,
			antialias: true
		});
		renderer.setClearColor(new THREE.Color(0xfad4a0), 0);
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
		camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
		const orbitControls = new OrbitControls(camera, renderer.domElement);

		scene.add(camera);

		orbitControls.autoRotate = false;
		orbitControls.autoRotateSpeed = 5;
		//orbitControls.enableDamping = true;
		orbitControls.dampingFactor = .01;
		orbitControls.update();

		const directionalLight = new THREE.DirectionalLight(new THREE.Color(0xffffff), 0.4);
		scene.add(directionalLight);

		const ambientLight = new THREE.AmbientLight(new THREE.Color(0xffffff), 0.5);
		scene.add(ambientLight);

		const color = new THREE.Color(0xff9c00);
		const intensity = 0.1;

		addWindowLight(0.55, 1.05, intensity, color, scene, new THREE.Vector3(1.03, 1.2, -0.2), new THREE.Euler(0, Math.PI / 2, 0));
		addWindowLight(0.425, 0.85, intensity, color, scene, new THREE.Vector3(1.03, 1.2, 1.275), new THREE.Euler(0, Math.PI / 2, 0));
		addWindowLight(0.5, 0.95, intensity, color, scene, new THREE.Vector3(0.57, 1.045, -1.95), new THREE.Euler(0, Math.PI, 0));

		//addScreenLight(0.33, 0.18, 25, new THREE.Color(0xffffff), scene, new THREE.Vector3(-1.055, 0.37, 1.535), new THREE.Euler(0, 0, 0));

		const assets3D: (THREE.Group | THREE.Mesh)[] = [];
		const loader = new GLTFLoader();

		loader.load('/ecotech/house.glb', (gltf) => {
			const object3D = gltf.scene;
			scene.add(object3D);
			//assets3D.push(object3D);
			object3D.scale.set(0.1, 0.1, 0.1);
			object3D.position.set(-0.5, 0, 0);
			object3D.traverse(mesh => mesh.renderOrder = 2);
		});

		addCameraMask(camera, 0.15, 0.2, new THREE.Color(0xffffff)); // render order 1

		loader.load('/ecotech/house.glb', (gltf) => {
			const object3D = gltf.scene;
			scene.add(object3D);
			//assets3D.push(object3D);
			object3D.scale.set(0.1, 0.1, 0.1);
			object3D.position.set(-0.5, 0, 0);
			object3D.traverse(mesh => mesh.renderOrder = 0);
		});

		camera.lookAt(0, 0, 0);
		orbitControls.target.set(0, 0, 0);
		const offset = 0.1;
		orbitControls.minPolarAngle = Math.PI / 4 - offset;
		orbitControls.maxPolarAngle = Math.PI / 4 + offset * 5;
		orbitControls.update();
		orbitControls.enableZoom = true;

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

const Watermark: FunctionComponent = () => {
	return (
		<div className='watermark'>
			<img src='/ecotech/ecotechlogo.png'></img>
			<span style={{ right: '0' }}>SmartThermo™</span>
		</div>
	)
};

const SmartThermostat: FunctionComponent = () => {
	return (
		<div className='smartThermostat'></div>
	)
};

const App = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const simulateLoadTimeMS = 500;
	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(true);
		}, simulateLoadTimeMS);
	}, []);
	return (
		<div>
			{!isLoaded && <LoadingScreen />}
			<Watermark />
			{!isLoaded && <SmartThermostat />}
			<THREEScene />
		</div>
	)
};

export default App;