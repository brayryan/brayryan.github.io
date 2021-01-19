import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from './OrbitControls.js'

let renderer;
const loader = new GLTFLoader();
<<<<<<< HEAD

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);
camera.position.z = -15;
=======
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);
camera.position.z = 15;
>>>>>>> edge

const light = new THREE.AmbientLight(0xffffff, 1); // soft white light

scene.add(light);
<<<<<<< HEAD
scene.background = new THREE.Color(0xffffff);
=======
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


async function loadSneaker() {
  loader.load('assets/models/sneaker/scene.gltf', function (sneaker) {
<<<<<<< HEAD
    sneaker.scene.position.set(-1,-5,-20);
    sneaker.scene.scale.set(.5,.5,.5);
    scene.add(sneaker.scene);
=======
    sneaker.scene.position.set(0,0,9);
    sneaker.scene.scale.set(.9,.9,.9);
    scene.add(sneaker.scene);
    resize(window.innerWidth, window.innerHeight );
>>>>>>> edge
  
  }, undefined, 
    function (error) {
      console.log('An error happened' + error);
    }
  );
}

async function loadPlant() {
    loader.load('assets/models/plant/scene.gltf', function (plant) {
      // plant.scene.position.set(2,2,0);
<<<<<<< HEAD
      plant.scene.scale.set(.15,.15,.15)
      plant.scene.position.set(0,-24,-100);
=======
      plant.scene.scale.set(.017,.017,.017)
      plant.scene.position.set(1.7,1.6,0);
>>>>>>> edge
      scene.add(plant.scene);
    
    }, undefined, 
      function (error) {
        console.log('An error happened' + error);
      }
    ); 
  }

<<<<<<< HEAD
const resize = (width, height) => {
  var elWidth = width * .66;
=======
const resize = () => {
  var elWidth = renderer.domElement.parentElement.offsetWidth;
>>>>>>> edge
  var elHeight = elWidth * .85;
  renderer.setSize(elWidth, elHeight)
  camera.aspect = elWidth / elHeight;
  camera.updateProjectionMatrix();
};

export const createScene = (el) => {
<<<<<<< HEAD
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  resize(window.innerWidth, window.innerHeight );
  loadSneaker().then(animate());
  loadPlant().then(animate());
  // document.body.appendChild(renderer.domElement);
  // let controls = new OrbitControls(camera, renderer.domElement);
  // controls.addEventListener('change', renderer);

}
// window.addEventListener('resize', resize);
=======
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el, alpha: true });
  loadSneaker().then(animate());
  loadPlant().then(animate());
  // document.body.appendChild(renderer.domElement);
  let controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', renderer);

}


window.addEventListener('resize', resize);
>>>>>>> edge
