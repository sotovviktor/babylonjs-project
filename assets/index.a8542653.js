import{E as e,S as n,A as o,V as t,D as r,M as a,a as s,b as c}from"./vendor.0a9589d1.js";!function(e=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(o){const t=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[n]=e=>new Promise(((o,a)=>{const s=new URL(e,t);if(self[n].moduleMap[s])return o(self[n].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${n}.moduleMap['${s}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){a(new Error(`Failed to import: ${e}`)),r(d)},onload(){o(self[n].moduleMap[s]),r(d)}});document.head.appendChild(d)})),self[n].moduleMap={}}}("/babylonjs-project/assets/");const d=document.getElementById("app"),i=new e(d),m=function(e){const i=new n(e);new o("Camera",-3*Math.PI/4,Math.PI/3,50,t.Zero(),i).attachControl(d,!0);const m=new r("dir01",new t(0,-1,1),i);m.position=new t(0,15,-30),a.CreateGround("ground",100,100,1,i,!1).receiveShadows=!0;const l=new s(1024,m);return c.ImportMesh("him","/babylonjs-project//scenes/Dude/","Dude.babylon",i,(function(e,n,o){var r=e[0];r.scaling=new t(.2,.2,.2),l.addShadowCaster(r,!0),i.beginAnimation(o[0],0,100,!0)})),i}(i);i.runRenderLoop((()=>{m.render()}));