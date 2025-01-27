var D=Object.defineProperty;var i=(t,o)=>D(t,"name",{value:o,configurable:!0});var Q=new THREE.Color().setHex(8900331),v=-100,k=-100,p=500,_=50*Math.PI/180,O=20*Math.PI/180,z=10*Math.PI/180,A=-Math.tan(_)*500,W=Math.tan(O)*Math.sqrt(500**2+A**2),$=Object.freeze({DIR_LIGHT:{POSITION:{X:v,Y:k},SHADOW:{CAMERA:{LEFT:-p,RIGHT:p,TOP:p,BOTTON:-p}}},CAMERA:{ROTATION:{X:_,Y:O,Z:z},POSITION:{X:W,Y:A}}});var s=42,E=3;var h=s*E,M=42,R=["car","truck","forest"],l=[2,2.5,3];var L=[20,45,60];function y(){let t=new THREE.Group,o=new THREE.Mesh(new THREE.BoxBufferGeometry(15*2,15*2,20*2),new THREE.MeshPhongMaterial({color:5056806,flatShading:!0}));o.position.z=10*2,o.castShadow=!0,o.receiveShadow=!0,t.add(o);let n=L[Math.floor(Math.random()*L.length)],r=new THREE.Mesh(new THREE.BoxBufferGeometry(30*2,30*2,n*2),new THREE.MeshLambertMaterial({color:8036893,flatShading:!0}));return r.position.z=(n/2+20)*2,r.castShadow=!0,r.receiveShadow=!1,t.add(r),t}i(y,"Three");function I(){let t=new THREE.Group,o=i(c=>new THREE.Mesh(new THREE.BoxBufferGeometry(h*2,s*2),new THREE.MeshPhongMaterial({color:c})),"createSection"),n=o(12252245);n.receiveShadow=!0,t.add(n);let r=o(10078278);r.position.x=-h*2,t.add(r);let a=o(10078278);return a.position.x=h*2,t.add(a),t.position.z=1.5*2,t}i(I,"Grass");function m(){let t=new THREE.Group,n=i(r=>new THREE.Mesh(new THREE.BoxBufferGeometry(M*2,s*2),new THREE.MeshPhongMaterial({color:r})),"createSection")(12252245);return n.receiveShadow=!0,t.add(n),t.position.z=1.5*2,t}i(m,"GrassTile");function N(){let t=new THREE.Group,n=i(r=>new THREE.Mesh(new THREE.BoxBufferGeometry(M*2,s*2),new THREE.MeshPhongMaterial({color:r})),"createSection")(4541017);return n.receiveShadow=!0,t.add(n),t.position.z=1.5*2,t}i(N,"RoadTile");function S(){let t=new THREE.Group,o=i(c=>new THREE.Mesh(new THREE.PlaneBufferGeometry(h*2,s*2),new THREE.MeshPhongMaterial({color:c})),"createSection"),n=o(4541017);n.receiveShadow=!0,t.add(n);let r=o(3751241);r.position.x=-h*2,t.add(r);let a=o(3751241);return a.position.x=h*2,t.add(a),t}i(S,"Road");var x=[10822947,12432952,7909707],Y=new d(40,80,[{x:0,y:10,w:30,h:60}]),Z=new d(40,80,[{x:10,y:10,w:30,h:60}]),X=new d(110,40,[{x:10,y:0,w:50,h:30},{x:70,y:0,w:30,h:30}]),F=new d(110,40,[{x:10,y:10,w:50,h:30},{x:70,y:10,w:30,h:30}]),U=new d(30,30,[{x:15,y:0,w:10,h:30}]),V=new d(25,30,[{x:0,y:15,w:10,h:10}]),j=new d(25,30,[{x:0,y:5,w:10,h:10}]);function B(){let t=new THREE.Group,o=x[Math.floor(Math.random()*x.length)],n=new THREE.Mesh(new THREE.BoxBufferGeometry(60*2,30*2,15*2),new THREE.MeshPhongMaterial({color:o,flatShading:!0}));n.position.z=12*2,n.castShadow=!0,n.receiveShadow=!0,t.add(n);let r=new THREE.Mesh(new THREE.BoxBufferGeometry(33*2,24*2,12*2),[new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:Z}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:Y}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:X}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0,map:F}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0}),new THREE.MeshPhongMaterial({color:13421772,flatShading:!0})]);r.position.x=6*2,r.position.z=25.5*2,r.castShadow=!0,r.receiveShadow=!0,t.add(r);let a=new T;a.position.x=-18*2,t.add(a);let c=new T;return c.position.x=18*2,t.add(c),t.castShadow=!0,t.receiveShadow=!1,t}i(B,"Car");function G(){let t=new THREE.Group,o=x[Math.floor(Math.random()*x.length)],n=new THREE.Mesh(new THREE.BoxBufferGeometry(100*2,25*2,5*2),new THREE.MeshLambertMaterial({color:11847420,flatShading:!0}));n.position.z=10*2,t.add(n);let r=new THREE.Mesh(new THREE.BoxBufferGeometry(75*2,35*2,40*2),new THREE.MeshPhongMaterial({color:11847420,flatShading:!0}));r.position.x=15*2,r.position.z=30*2,r.castShadow=!0,r.receiveShadow=!0,t.add(r);let a=new THREE.Mesh(new THREE.BoxBufferGeometry(25*2,30*2,30*2),[new THREE.MeshPhongMaterial({color:o,flatShading:!0}),new THREE.MeshPhongMaterial({color:o,flatShading:!0,map:U}),new THREE.MeshPhongMaterial({color:o,flatShading:!0,map:V}),new THREE.MeshPhongMaterial({color:o,flatShading:!0,map:j}),new THREE.MeshPhongMaterial({color:o,flatShading:!0}),new THREE.MeshPhongMaterial({color:o,flatShading:!0})]);a.position.x=-40*2,a.position.z=20*2,a.castShadow=!0,a.receiveShadow=!0,t.add(a);let c=new T;c.position.x=-38*2,t.add(c);let f=new T;f.position.x=-10*2,t.add(f);let w=new T;return w.position.x=30*2,t.add(w),t}i(G,"Truck");function T(){let t=new THREE.Mesh(new THREE.BoxBufferGeometry(12*2,33*2,12*2),new THREE.MeshLambertMaterial({color:3355443,flatShading:!0}));return t.position.z=6*2,t}i(T,"Wheel");function d(t,o,n){let r=document.createElement("canvas");r.width=t,r.height=o;let a=r.getContext("2d");return a.fillStyle="#ffffff",a.fillRect(0,0,t,o),a.fillStyle="rgba(0,0,0,0.6)",n.forEach(c=>{a.fillRect(c.x,c.y,c.w,c.h)}),new THREE.CanvasTexture(r)}i(d,"Texture");var b=["grass","road","tree","rock"],u=[[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0]];function le(t){for(let o=0;o<u.length;o++)for(let n=0;n<u[o].length;n++){let r=new q(u[o][n],o,n);r.mesh.position.x=o*s*2-s*2,r.mesh.position.y=n*s*2,t.add(r.mesh)}}i(le,"generateMap");function q(t,o,n){switch(this.x_index=o,this.y_index=n,this.type=b[t],this.occupiedPositions=new Set,this.type){case"grass":this.mesh=new m;break;case"road":this.mesh=new N;break;default:this.mesh=new m;break}}i(q,"Tile");var Te=i((t,o,n,r,a,c,f,w,H,g,P)=>{lanes=K(t),currentLane=0,currentColumn=Math.floor(E/2),previousTimestamp=null,startMoving=!1,moves=[],H.position.x=0,H.position.y=0,g.position.y=initialCameraPositionY,g.position.x=initialCameraPositionX,P.position.x=initialDirLightPositionX,P.position.y=initialDirLightPositionY},"initaliseValues"),K=i(t=>[-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9].map(o=>{let n=new C(o);return n.mesh.position.y=o*s*2,t.add(n.mesh),n}).filter(o=>o.index>=0),"generateLanes"),we=i((t,o)=>{let n=o.length,r=new C(n);r.mesh.position.y=n*s*2,t.add(r.mesh),o.push(r)},"addLane");function C(t){switch(this.index=t,this.type=t<=0?"field":R[Math.floor(Math.random()*R.length)],this.type){case"field":{this.type="field",this.mesh=new I;break}case"forest":{this.mesh=new I,this.occupiedPositions=new Set,this.threes=[1,2,3,4].map(()=>{let o=new y,n;do n=Math.floor(Math.random()*E);while(this.occupiedPositions.has(n));return this.occupiedPositions.add(n),o.position.x=(n*s+s/2)*2-h*2/2,this.mesh.add(o),o});break}case"car":{this.mesh=new S,this.direction=Math.random()>=.5;let o=new Set;this.vechicles=[1,2,3].map(()=>{let n=new B,r;do r=Math.floor(Math.random()*E/2);while(o.has(r));return o.add(r),n.position.x=(r*s*2+s/2)*2-h*2/2,this.direction||(n.rotation.z=Math.PI),this.mesh.add(n),n}),this.speed=l[Math.floor(Math.random()*l.length)];break}case"truck":{this.mesh=new S,this.direction=Math.random()>=.5;let o=new Set;this.vechicles=[1,2].map(()=>{let n=new G,r;do r=Math.floor(Math.random()*E/3);while(o.has(r));return o.add(r),n.position.x=(r*s*3+s/2)*2-h*2/2,this.direction||(n.rotation.z=Math.PI),this.mesh.add(n),n}),this.speed=l[Math.floor(Math.random()*l.length)];break}}}i(C,"Lane");export{we as addLane,K as generateLanes,le as generateMap,Te as initaliseValues};
