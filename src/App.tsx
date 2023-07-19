import './App.css';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import { vertexShader, fragmentShader } from './shader';
//import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import { UIPanelMultistage, UIPanelProperties } from './UIPanels';

let mouseDown = false;
let slideX = window.innerWidth / 2;
let threeCameraMask: THREE.Mesh;

const LoadingScreen: FunctionComponent = () => {
	return (
		<div className='LoadingScreen'>
			<img src='/ecotech/ecotechlogo.png'></img>
			<span>Loading</span>
		</div>
	)
};

const Slider: FunctionComponent = () => {
	const sliderRef = useRef<HTMLDivElement>(null!);
	useEffect(() => {
		sliderRef.current.addEventListener('pointerdown', () => {
			mouseDown = true;
		});
		window.addEventListener('pointerup', () => {
			mouseDown = false;
		});
		window.addEventListener('pointermove', (e) => {
			if (mouseDown) {
				slideX = e.clientX;
			}
		});
		requestAnimationFrame(frame);
		function frame() {
			sliderRef.current.style.left = `${slideX}px`;
			requestAnimationFrame(frame);
		};
	}, []);
	return (
		<div ref={sliderRef} className='Slider'>
			<div className='SliderLine'></div>
		</div>
	)
}

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
		//renderer.render(scene, camera);
		orbitControls.update();

		const slidePercentage = slideX / window.innerWidth;
		const width = 0.15;
		if (mouseDown) threeCameraMask.position.set((slidePercentage * width * 2) - (width), 0, 0);

		//const delta = clock.getDelta();
		//const elapsed = clock.getElapsedTime();

		renderer.autoClear = true;
		camera.layers.set(0);
		renderer.render(scene, camera);

		renderer.autoClear = false;

		camera.layers.set(1);
		renderer.render(scene, camera);

		requestAnimationFrame(() => render(renderer, scene, camera, orbitControls));
	};

	/*const addRectLight = (width: number, height: number, intensity: number, color: THREE.Color, scene: THREE.Scene, position: THREE.Vector3, rotation: THREE.Euler) => {
		const rectLight = new THREE.RectAreaLight(color, intensity, width, height);
		const rectLightHelper = new RectAreaLightHelper(rectLight);
		rectLight.rotation.copy(rotation);
		rectLight.position.copy(position);
		scene.add(rectLight);
	};*/

	const addScreenLight = (width: number, height: number, color: THREE.Color, scene: THREE.Scene, position: THREE.Vector3, rotation: THREE.Euler) => {
		//const rectLight = new THREE.RectAreaLight(color, intensity, width, height);
		//const rectLightHelper = new RectAreaLightHelper(rectLight);
		const geometry = new THREE.PlaneGeometry(width, height);
		const material = new THREE.MeshBasicMaterial({ color: color });
		material.side = THREE.DoubleSide;

		const screenLight = new THREE.Mesh(geometry, material);
		screenLight.rotation.copy(rotation);
		screenLight.position.copy(position);
		scene.add(screenLight);
		screenLight.layers.set(1);

		/*const pointLight = new THREE.PointLight(color, intensity, 1);
		pointLight.position.copy(position);
		scene.add(pointLight);*/
	};

	const addCameraMask = (camera: THREE.PerspectiveCamera, width: number, height: number, color: THREE.Color) => {
		const geometry = new THREE.PlaneGeometry(width, height);
		const material = new THREE.MeshBasicMaterial({ color: color, opacity: 0.5, transparent: true });
		material.side = THREE.DoubleSide;
		material.colorWrite = false;

		threeCameraMask = new THREE.Mesh(geometry, material);
		threeCameraMask.renderOrder = 1;
		threeCameraMask.position.set(0, 0, 0);
		threeCameraMask.scale.set(2, 1, 1);

		const group = new THREE.Group();

		group.add(threeCameraMask);

		group.position.set(width, 0, -0.1);

		camera.add(group);
	};

	const addWindowLight = (width: number, height: number, scene: THREE.Scene, position: THREE.Vector3, rotation: THREE.Euler) => {
		//const rectLight = new THREE.RectAreaLight(color, intensity, width, height);
		//const rectLightHelper = new RectAreaLightHelper(rectLight);
		const geometry = new THREE.PlaneGeometry(width, height);
		const material = new THREE.MeshBasicMaterial();
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
		const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 100000);
		camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
		const orbitControls = new OrbitControls(camera, renderer.domElement);

		scene.add(camera);

		const sceneGroup = new THREE.Group();
		scene.add(sceneGroup);

		sceneGroup.position.set(0, 0, 0);

		orbitControls.autoRotate = true;
		orbitControls.autoRotateSpeed = 2;
		orbitControls.enableDamping = true;
		orbitControls.dampingFactor = .01;
		orbitControls.update();

		const directionalLight = new THREE.DirectionalLight(new THREE.Color(0xffffff), 0.4);
		directionalLight.layers.set(0);
		sceneGroup.add(directionalLight);

		const ambientLight = new THREE.AmbientLight(new THREE.Color(0xffffff), 0.5);
		ambientLight.layers.set(0);
		sceneGroup.add(ambientLight);

		const directionalLight2 = new THREE.DirectionalLight(new THREE.Color(0xffffff), 0.5);
		directionalLight2.layers.set(1);
		sceneGroup.add(directionalLight2);

		const ambientLight2 = new THREE.AmbientLight(new THREE.Color(0xffffff), 0.3);
		ambientLight2.layers.set(1);
		sceneGroup.add(ambientLight2);

		addWindowLight(0.55, 1.05, scene, new THREE.Vector3(1.03, 1.2, -0.2), new THREE.Euler(0, Math.PI / 2, 0));
		addWindowLight(0.425, 0.85, scene, new THREE.Vector3(1.03, 1.2, 1.275), new THREE.Euler(0, Math.PI / 2, 0));
		addWindowLight(0.5, 0.95, scene, new THREE.Vector3(0.57, 1.045, -1.95), new THREE.Euler(0, Math.PI, 0));

		addScreenLight(0.33, 0.18, new THREE.Color(0xffffff), scene, new THREE.Vector3(-1.055, 0.37, 1.535), new THREE.Euler(0, 0, 0));

		//const assets3D: (THREE.Group | THREE.Mesh)[] = [];
		const loader = new GLTFLoader();

		const urlGLB = '/ecotech/house.glb';

		loader.load(urlGLB, (gltf) => {
			const object3D = gltf.scene;
			sceneGroup.add(object3D);
			//assets3D.push(object3D);
			object3D.scale.set(0.1, 0.1, 0.1);
			object3D.position.set(-0.5, 0, 0);
			object3D.traverse(mesh => mesh.renderOrder = 2);
			object3D.traverse(mesh => mesh.layers.set(1));
		});

		addCameraMask(camera, 0.15, 0.2, new THREE.Color(0xffffff)); // render order 1

		loader.load(urlGLB, (gltf) => {
			const object3D = gltf.scene;
			sceneGroup.add(object3D);
			//assets3D.push(object3D);
			object3D.scale.set(0.1, 0.1, 0.1);
			object3D.position.set(-0.5, 0, 0);
			object3D.traverse(mesh => mesh.renderOrder = 0);
			object3D.traverse(mesh => mesh.layers.set(0));
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
	const [showIntroUI, setShowIntroUI] = useState(false);
	const [showSlider, setShowSlider] = useState(false);

	const simulateLoadTimeMS = 500;
	const introPanelProperties: UIPanelProperties[] = [
		{ description: 'SmartThermo brings peace of mind to your home', isButton: true, buttonDescription: 'See the benefits', transitionSeconds: 1 },
		{ description: 'Slide the swiper to reveal the difference', isButton: true, buttonDescription: 'Take me there', transitionSeconds: 1 }
	]

	useEffect(() => {
		setTimeout(() => {
			const introUIPopupTimeMS = 1000;
			setIsLoaded(true);
			setTimeout(() => setShowIntroUI(true), introUIPopupTimeMS);
		}, simulateLoadTimeMS);
	}, []);

	const panelsCompleted = () => {
		setShowSlider(true);
	};

	return (
		<div>
			{!isLoaded && <LoadingScreen />}
			{showSlider && <Slider />}
			<Watermark />
			<UIPanelMultistage UIPanelProperties={introPanelProperties} show={showIntroUI} onPanelsCompletion={panelsCompleted} />
			{!isLoaded && <SmartThermostat />}
			<THREEScene />
		</div>
	)
};

export default App;