var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);

const container = document.getElementById("three-container");
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x36343a);

renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

var cubes = [];
var size = 1;
var cubeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
var cubeMaterial = new THREE.MeshDepthMaterial();

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

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame( animate );

    scene.rotation.x += 0.01;
    scene.rotation.y += 0.01;
    scene.position.x = Math.cos(Date.now() * 0.00051) * 4;
    /* scene.position.x = Math.sin(Date.now() * 0.001) * 2; */
    /* scene.position.x += 0.01; */
   

    renderer.render( scene, camera );
};

animate();
