import './style.css'
import * as BABYLON from '@babylonjs/core/Legacy/legacy';

var createScene = function (engine) {
  const  scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera("Camera", -3 * Math.PI / 4, Math.PI / 3, 50, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  
  const  light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -1, 1), scene);
  light.position = new BABYLON.Vector3(0, 15, -30);

  var ground = BABYLON.Mesh.CreateGround("ground", 100, 100, 1, scene, false);
  ground.receiveShadows = true;

  // Shadow generator
  const shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
      
  BABYLON.SceneLoader.ImportMesh("him", "/scenes/Dude/", "Dude.babylon", scene, function (newMeshes2, particleSystems2, skeletons2) {
      var dude = newMeshes2[0];
      dude.scaling = new BABYLON.Vector3(0.2, 0.2, 0.2);
          
      //add dude, true means add children as well
      shadowGenerator.addShadowCaster(dude, true);
              
      scene.beginAnimation(skeletons2[0], 0, 100, true);
  });

  return scene;
};

const canvas = document.getElementById('app');
const engine = new BABYLON.Engine(canvas);
const scene = createScene(engine);

engine.runRenderLoop(() => {
  scene.render();
})