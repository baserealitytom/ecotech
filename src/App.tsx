import './App.css';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import { vertexShader, fragmentShader } from './shader';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import { UIPanelMultistage, UIPanelProperties, UIPanel } from './UIPanels';

let sliderPointerDown = false;
let threeCameraMask: THREE.Group;
let moveTo = new THREE.Vector2(window.innerWidth * 0.2, 0);
let quaternionsMultiplied = new THREE.Quaternion();

const LoadingScreen: FunctionComponent = () => {
	return (
		<div className='LoadingScreen'>
			<img src='/ecotech/ecotechlogo.png'></img>
			<span>Loading</span>
		</div>
	)
};

interface SliderProperties {
	onSliderCompletion: () => void
}

const Slider: FunctionComponent<SliderProperties> = (props) => {
	const sliderRef = useRef<HTMLDivElement>(null!);
	const [sliderCompleted, setSliderCompleted] = useState(false);
	useEffect(() => {

		sliderRef.current.addEventListener('pointerdown', () => {
			sliderPointerDown = true;
		});

		window.addEventListener('pointerup', () => {
			sliderPointerDown = false;
		});

		window.addEventListener('pointermove', (e) => {
			if (sliderPointerDown) {
				moveTo = new THREE.Vector2(e.clientX, e.clientY);
			}
		});

		requestAnimationFrame(frame);

		function frame() {
			sliderRef.current.style.left = `${moveTo.x}px`;
			if (sliderCompleted === false) {
				if (moveTo.x >= window.innerWidth / 2) {
					props.onSliderCompletion();
					setSliderCompleted(true);
				}
			}
			requestAnimationFrame(frame);
		};

	}, []);
	return (
		<div ref={sliderRef} className='Slider'>
			<div className='SliderLine'></div>
			<div className='SliderButton'></div>
		</div>
	)
}

const THREEScene: FunctionComponent = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null!);

	const raycaster = new THREE.Raycaster();
	const pointer = new THREE.Vector2();

	let pointerDown = false;

	let group3D: THREE.Group;

	window.addEventListener('pointerdown', () => {
		pointerDown = true;
	})

	window.addEventListener('pointerup', () => {
		pointerDown = false;
	});

	const toRadians = (delta: number) => {
		return delta * Math.PI / 180;
	};

	let previousMousePosition = {
		x: 0, y: 0
	};

	window.addEventListener('pointermove', (event) => {
		pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
		pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

		var deltaMove = {
			x: event.clientX - previousMousePosition.x,
			y: event.clientY - previousMousePosition.y
		};

		if (pointerDown && !sliderPointerDown && group3D) {

			const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, toRadians(deltaMove.x), 0, 'XYZ'));

			const currentQuaternion = new THREE.Quaternion().copy(group3D.quaternion);

			quaternionsMultiplied = currentQuaternion.multiply(deltaRotationQuaternion);

		}

		previousMousePosition = {
			x: event.clientX,
			y: event.clientY
		};



	});

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

	const touchpoints: THREE.Mesh[] = [];

	const render = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera, orbitControls: OrbitControls, sceneGroup: THREE.Group) => {
		orbitControls.update();
		const mod = 0.5;
		const worldPos = getWorldPositionFromScreenVector2(camera, moveTo);
		const pointerWorldPos = getWorldPositionFromScreenVector2(camera, pointer);
		threeCameraMask.position.set(worldPos.x * (1 - mod) + threeCameraMask.position.x * mod, 0, -camera.position.z);
		//raycaster.setFromCamera(new THREE.Vector2(worldPos.x, worldPos.y), camera);
		raycaster.setFromCamera(pointer, camera);

		//sceneGroup.rotation.y += 0.001;
		if (quaternionsMultiplied) sceneGroup.quaternion.slerp(quaternionsMultiplied, 0.1);
		const intersects = raycaster.intersectObjects(scene.children);
		//const delta = clock.getDelta();
		//const elapsed = clock.getElapsedTime();

		touchpoints.map(touchpoint => {
			touchpoint.lookAt(camera.position);
		});

		renderer.autoClear = true;
		camera.layers.set(0);
		renderer.render(scene, camera);

		renderer.autoClear = false;

		camera.layers.set(1);
		renderer.render(scene, camera);

		requestAnimationFrame(() => render(renderer, scene, camera, orbitControls, sceneGroup));
	};

	const addScreenLight = (width: number, height: number, color: THREE.Color, sceneGroup: THREE.Group, position: THREE.Vector3, rotation: THREE.Euler) => {
		const geometry = new THREE.PlaneGeometry(width, height);
		const material = new THREE.MeshBasicMaterial({ color: color });
		material.side = THREE.DoubleSide;

		const screenLight = new THREE.Mesh(geometry, material);
		screenLight.rotation.copy(rotation);
		screenLight.position.copy(position);
		sceneGroup.add(screenLight);
		screenLight.layers.set(1);
	};

	const getWorldPositionFromScreenVector2 = (camera: THREE.PerspectiveCamera, vec2: THREE.Vector2) => {

		const normalX = vec2.x / window.innerWidth * 2 - 1;
		const normalY = vec2.y / window.innerHeight * 2 - 1;

		const vector = new THREE.Vector3(normalX, -normalY, 0).unproject(camera);
		const direction = vector.sub(camera.position).normalize();
		const distance = -camera.position.z / direction.z;

		return camera.position.clone().add(direction.multiplyScalar(distance));

	};

	const getWorldScaleFromScreen = (camera: THREE.PerspectiveCamera) => {

		const dist = camera.position.z;
		const vFOV = THREE.MathUtils.degToRad(camera.fov);
		const height = 2 * Math.tan(vFOV / 2) * dist;
		const width = height * camera.aspect;

		return new THREE.Vector2(width, height);

	};

	const addCameraMask = (camera: THREE.PerspectiveCamera) => {

		const geo = new THREE.PlaneGeometry(1, 1);
		const mat = new THREE.MeshBasicMaterial({ color: '0xffffff', transparent: true, opacity: 0.5, colorWrite: false });
		const plane = new THREE.Mesh(geo, mat);
		plane.renderOrder = 1;

		const adjustScale = () => {
			const worldScale = getWorldScaleFromScreen(camera);
			plane.scale.set(worldScale.width / 2, worldScale.height, 1);
			plane.position.set(plane.scale.x / 2, 0, 0);
		};

		threeCameraMask = new THREE.Group();
		threeCameraMask.add(plane);
		camera.add(threeCameraMask);

		adjustScale();
	};

	const addRectLight = (width: number, height: number, sceneGroup: THREE.Group, position: THREE.Vector3, rotation: THREE.Euler) => {
		const rectLight = new THREE.RectAreaLight(new THREE.Color(0xffffff), 20, width * 1.5, height * 1.5);
		const rectLightHelper = new RectAreaLightHelper(rectLight);
		rectLight.layers.set(1);
		rectLight.rotation.copy(rotation);
		rectLight.position.copy(position);
		sceneGroup.add(rectLight);
		sceneGroup.add(rectLightHelper);
	};

	/*const addWindowLight = (width: number, height: number, sceneGroup: THREE.Group, position: THREE.Vector3, rotation: THREE.Euler) => {
		const geometry = new THREE.PlaneGeometry(width, height);
		const material = new THREE.MeshBasicMaterial();
		material.side = THREE.DoubleSide;
		material.colorWrite = false;

		const screenLight = new THREE.Mesh(geometry, material);
		screenLight.rotation.copy(rotation);
		screenLight.position.copy(position);
		sceneGroup.add(screenLight);
	};*/

	const addTouchpoint = (sceneGroup: THREE.Group, position: THREE.Vector3, texture: THREE.Texture) => {
		const geo = new THREE.PlaneGeometry(1, 1);
		const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.7 });
		const mesh = new THREE.Mesh(geo, material);
		sceneGroup.add(mesh);
		mesh.position.copy(position);
		const scale = 0.6;
		mesh.scale.set(scale, scale, 1);
		mesh.layers.set(1);
		touchpoints.push(mesh);
	};

	useEffect(() => {
		const scene = new THREE.Scene();
		const renderer = new THREE.WebGLRenderer({
			canvas: canvasRef.current,
			antialias: true
		});
		renderer.setClearColor(new THREE.Color(0xfad4a0), 0);
		const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
		camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;

		//camera.lookAt(0, 0, 0);
		camera.position.z = 10;

		const orbitControls = new OrbitControls(camera, renderer.domElement);

		scene.add(camera);

		const sceneGroup = new THREE.Group();
		scene.add(sceneGroup);
		group3D = sceneGroup;

		sceneGroup.scale.set(1.5, 1.5, 1.5);
		sceneGroup.position.set(0, -1, -3.5);

		orbitControls.autoRotate = false;
		orbitControls.enableRotate = false;
		orbitControls.autoRotateSpeed = 1;
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

		//addWindowLight(0.55, 1.05, sceneGroup, new THREE.Vector3(1.03, 1.2, -0.2), new THREE.Euler(0, Math.PI / 2, 0));
		//addWindowLight(0.425, 0.85, sceneGroup, new THREE.Vector3(1.03, 1.2, 1.275), new THREE.Euler(0, Math.PI / 2, 0));
		//addWindowLight(0.5, 0.95, sceneGroup, new THREE.Vector3(0.57, 1.045, -1.95), new THREE.Euler(0, Math.PI, 0));

		addRectLight(0.55, 1.05, sceneGroup, new THREE.Vector3(1.03, 1.2, -0.2), new THREE.Euler(0, Math.PI / 2, 0));
		addRectLight(0.425, 0.85, sceneGroup, new THREE.Vector3(1.03, 1.2, 1.275), new THREE.Euler(0, Math.PI / 2, 0));
		addRectLight(0.5, 0.95, sceneGroup, new THREE.Vector3(0.57, 1.045, -1.95), new THREE.Euler(0, Math.PI, 0));

		addScreenLight(0.33, 0.18, new THREE.Color(0xffffff), sceneGroup, new THREE.Vector3(-1.055, 0.37, 1.535), new THREE.Euler(0, 0, 0));

		//const assets3D: (THREE.Group | THREE.Mesh)[] = [];
		const loader = new GLTFLoader();

		const urlGLB = '/ecotech/house.glb';

		loader.load(urlGLB, (gltf) => {
			const object3D = gltf.scene;
			sceneGroup.add(object3D);
			object3D.scale.set(0.1, 0.1, 0.1);
			object3D.position.set(-0.5, 0, 0);
			object3D.traverse(mesh => mesh.renderOrder = 2);
			object3D.traverse(mesh => mesh.layers.set(1));
		});

		const texture = new THREE.TextureLoader().load('/touchpoint.png');

		addTouchpoint(sceneGroup, new THREE.Vector3(-1.1, 0.7, 1.535), texture);
		addTouchpoint(sceneGroup, new THREE.Vector3(-1.1, 0.7, -1.5), texture);
		addTouchpoint(sceneGroup, new THREE.Vector3(0.7, 0.7, 1.535), texture);

		addCameraMask(camera); // render order 1

		loader.load(urlGLB, (gltf) => {
			const object3D = gltf.scene;
			sceneGroup.add(object3D);
			object3D.scale.set(0.1, 0.1, 0.1);
			object3D.position.set(-0.5, 0, 0);
			object3D.traverse(mesh => mesh.renderOrder = 0);
			object3D.traverse(mesh => mesh.layers.set(0));
		});

		orbitControls.target.set(0, 0, 0);
		const offset = 0.1;
		orbitControls.minPolarAngle = Math.PI / 4 - offset;
		orbitControls.maxPolarAngle = Math.PI / 4 + offset * 5;
		orbitControls.update();
		orbitControls.enableZoom = false;
		orbitControls.enableRotate = false;

		renderer.setSize(window.innerWidth, window.innerHeight);

		requestAnimationFrame(() => render(renderer, scene, camera, orbitControls, sceneGroup));

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

const ExperienceUI = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [showIntroUI, setShowIntroUI] = useState(false);
	const [showTopPanelUI, setShowTopPanelUI] = useState(false);
	const [showRevealPanelUI, setShowRevealPanelUI] = useState(false);
	const [showSlider, setShowSlider] = useState(false);

	const simulateLoadTimeMS = 500;

	const introPanelProperties: UIPanelProperties[] = [
		{ description: 'SmartThermo brings peace of mind to your home', isButton: true, buttonDescription: 'See the benefits', transitionSeconds: 1 },
		{ description: 'Slide the swiper to reveal the difference', isButton: true, buttonDescription: 'Take me there', transitionSeconds: 1 }
	];

	const topPanelProperties: UIPanelProperties = { description: 'Slide the swiper to reveal the SmartThermo home', isButton: false, transitionSeconds: 1 };
	const revealPanelProperties: UIPanelProperties = { description: 'The SmartThermo home leverages AI to reduce bills & energy consumption', isButton: false, transitionSeconds: 1 };

	useEffect(() => {
		setTimeout(() => {
			const introUIPopupTimeMS = 1000;
			setIsLoaded(true);
			setTimeout(() => setShowIntroUI(true), introUIPopupTimeMS);
		}, simulateLoadTimeMS);
	}, []);

	const panelsCompleted = () => {
		setShowSlider(true);
		setShowTopPanelUI(true);
	};

	const sliderCompleted = () => {
		const panelRevealMS = 1000;
		setShowTopPanelUI(false);
		setTimeout(() => setShowRevealPanelUI(true), panelRevealMS);
	};

	return (
		<div>
			{!isLoaded && <LoadingScreen />}
			{showSlider && <Slider onSliderCompletion={sliderCompleted} />}
			<Watermark />
			<UIPanel display={showRevealPanelUI} index={0} className='topPanel' {...revealPanelProperties} />
			<UIPanel display={showTopPanelUI} index={0} className='topPanel' {...topPanelProperties} />
			<UIPanelMultistage UIPanelProperties={introPanelProperties} show={showIntroUI} onPanelsCompletion={panelsCompleted} className='UIPanel' />
			{!isLoaded && <SmartThermostat />}
		</div>
	)
};

const App = () => {
	return (
		<div>
			<ExperienceUI />
			<THREEScene />
		</div>
	)
};

export default App;