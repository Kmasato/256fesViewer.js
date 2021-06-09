var scene, camera, renderer, holoplay;

var directionalLight;
var ambientLight;

var cubeGeometry;
var dubeMaterial;
var cubes;

function init(){
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(13.5, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(0,0,20);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    holoplay = new HoloPlay(scene, camera, renderer);

}

window.addEventListener('resize', function(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    renderer.setSize(width, height);

    camera.aspect = width/height;
    camera.updateProjectionMatrix();
});

function draw(){
    holoplay.render();
}

function RunApp(){
    requestAnimationFrame(RunApp);
    draw();
}

init();
RunApp();