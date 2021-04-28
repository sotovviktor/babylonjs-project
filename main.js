import './style.css'
import { Engine } from "@babylonjs/core/Engines/engine";
import { Vector3 } from "@babylonjs/core/Maths/math";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { Scene } from "@babylonjs/core/scene";
import { ShadowGenerator } from "@babylonjs/core/Lights/Shadows/shadowGenerator";
import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";

// Side-effects only imports allowing the standard material to be used as default.
import "@babylonjs/core/Materials/standardMaterial";
// Side-effects only imports allowing Mesh to create default shapes (to enhance tree shaking, the construction methods on mesh are not available if the meshbuilder has not been imported).
import "@babylonjs/core/Meshes/Builders/groundBuilder";
import "@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent";
import "@babylonjs/core/Loading/Plugins/babylonFileLoader"

var createScene = function (engine) {
  const  scene = new Scene(engine);

  const camera = new ArcRotateCamera("Camera", -3 * Math.PI / 4, Math.PI / 3, 50, Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  
  const  light = new DirectionalLight("dir01", new Vector3(0, -1, 1), scene);
  light.position = new Vector3(0, 15, -30);

  var ground = Mesh.CreateGround("ground", 100, 100, 1, scene, false);
  ground.receiveShadows = true;

  // Shadow generator
  const shadowGenerator = new ShadowGenerator(1024, light);
      console.log(import.meta.env.BASE_URL)
  SceneLoader.ImportMesh("him", import.meta.env.BASE_URL + "scenes/Dude/", "Dude.babylon", scene, function (newMeshes2, particleSystems2, skeletons2) {
      var dude = newMeshes2[0];
      dude.scaling = new Vector3(0.2, 0.2, 0.2);
          
      //add dude, true means add children as well
      shadowGenerator.addShadowCaster(dude, true);
              
      scene.beginAnimation(skeletons2[0], 0, 100, true);
  });

  return scene;
};

const canvas = document.getElementById('app');
const engine = new Engine(canvas);
const scene = createScene(engine);

engine.runRenderLoop(() => {
  scene.render();
})