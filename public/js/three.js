var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 100);

const container = document.getElementById("three-container");
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xffffff);

renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

var cubes = [];
var size = 1;
var cubeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
var cubeMaterial = new THREE.MeshDepthMaterial();
// var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
// var cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
// var color = new THREE.Color( 0xffc0cb );
// cubeMaterial.color = color;

// Lights

var light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 1);
scene.add(light);

// var light2 = new THREE.AmbientLight(0xffffff);
// light2.position.set(1, 1, 1);
// scene.add(light2);

// var light3 = new THREE.PointLight(0xffffff, 1, 50);
// light3.position.set(5,5,5);
// scene.add(light3);

var gap = 0.1;
for (var x = -size; x <= size; x += (0.1 + gap)) {
  for (var y = -size; y <= size; y += (0.1 + gap)) {
    for (var z = -size; z <= size; z += (0.1 + gap)) {
      var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(x, y, z);
      scene.add(cube);
      cubes.push(cube);
    }
  }
}

camera.position.z = 6;
camera.position.y = 4;

var animate = function () {
    requestAnimationFrame( animate );

    scene.rotation.x += 0.01;
    scene.rotation.y += 0.01;
    scene.position.x = Math.cos(Date.now() * 0.00051) * 8;
    /* scene.position.x = Math.sin(Date.now() * 0.001) * 2; */
    /* scene.position.x += 0.01; */

    renderer.render( scene, camera );
};

// Update rendere size
window.addEventListener("resize", function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

animate();
