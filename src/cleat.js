import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from './OrbitControls.js'

let renderer;
const loader = new GLTFLoader();
<<<<<<< HEAD

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);
camera.position.z = -7;

const light = new THREE.AmbientLight(0xffffff, 25); // soft white light

scene.add(light);
scene.background = new THREE.Color(0xffffff);
=======
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);
camera.position.z = 7;
// 50
const light = new THREE.AmbientLight(0xffffff, 25); // soft white light

scene.add(light);
// scene.background = new THREE.Color(0xf5f5f5);

>>>>>>> edge

// cleat 
// loader.load('assets/models/scene.gltf', function (object) {
//   object.scene.position.set(0,0,11);
//   scene.add(object.scene); 

//   const geometry = new THREE.SphereGeometry( .2, 32, 32 );
//   const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
//   const sphere = new THREE.Mesh( geometry, material );
//   sphere.position.set(0,0,1);
//   scene.add( sphere );


//   var helper = new THREE.BoundingBoxHelper(object.scene, 0xff0000);
// helper.update();
// // If you want a visible bounding box
// scene.add(helper);

//   animate();
// }, undefined, 
//   function (error) {
//     console.log('An error happened' + error);
//   }
// );



function animate() {
<<<<<<< HEAD
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
=======
  requestAnimationFrame(animate);
    scene.rotation.y += 0.01;
  renderer.render(scene, camera);
  
>>>>>>> edge
}

async function loadCleat() {
  loader.load('assets/models/scene.gltf', function (object) {
<<<<<<< HEAD
      object.scene.position.set(0,0,0);
      scene.add(object.scene); 
=======
    
      object.scene.position.set(0,0,12);
      object.scene.scale.set(1,1,1)
      // object.scene.position.set(0,-10,100);
      // object.scene.scale.set(9,9,9)
      scene.add(object.scene); 
      resize(window.innerWidth, window.innerHeight );
      // cleat = object;
>>>>>>> edge
    
    }, undefined, 
      function (error) {
        console.log('An error happened' + error);
      }
    );
}

<<<<<<< HEAD
const resize = (width, height) => {
  var elWidth = width * .66;
  var elHeight = elWidth / 3;
=======
const resize = () => {
  var elWidth = renderer.domElement.parentElement.offsetWidth;
  var elHeight = elWidth / 2;
>>>>>>> edge
  renderer.setSize(elWidth, elHeight)
  camera.aspect = elWidth / elHeight;
  camera.updateProjectionMatrix();
};

export const createScene = (el) => {
<<<<<<< HEAD
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  resize(window.innerWidth, window.innerHeight );
  loadCleat().then(animate());

  // let controls = new OrbitControls(camera, renderer.domElement);
  // controls.addEventListener('change', renderer);
  
}
// window.addEventListener('resize', resize);
=======
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el, alpha: true });
  resize();
  loadCleat().then(animate());

  let controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', renderer);
  
}
window.addEventListener('resize', resize);
>>>>>>> edge
