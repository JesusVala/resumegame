var x=Object.defineProperty;var I=(t,o)=>x(t,"name",{value:o,configurable:!0});var H=new THREE.Color().setHex(8900331),h=-100,i=-100,s=500,a=50*Math.PI/180,A=20*Math.PI/180,p=10*Math.PI/180,O=-Math.tan(a)*500,M=Math.tan(A)*Math.sqrt(500**2+O**2),N=Object.freeze({DIR_LIGHT:{POSITION:{X:h,Y:i},SHADOW:{CAMERA:{LEFT:-s,RIGHT:s,TOP:s,BOTTON:-s}}},CAMERA:{ROTATION:{X:a,Y:A,Z:p},POSITION:{X:M,Y:O}}});var c=42,S=17,T=c*S;var R=[20,45,60];function f(){let t=new THREE.Group,o=new THREE.Mesh(new THREE.BoxBufferGeometry(15*20,15*20,20*20),new THREE.MeshPhongMaterial({color:5056806,flatShading:!0}));o.position.z=10*20,o.castShadow=!0,o.receiveShadow=!0,t.add(o);let n=R[Math.floor(Math.random()*R.length)],r=new THREE.Mesh(new THREE.BoxBufferGeometry(30*20,30*20,n*20),new THREE.MeshLambertMaterial({color:8036893,flatShading:!0}));return r.position.z=(n/2+20)*20,r.castShadow=!0,r.receiveShadow=!1,t.add(r),t}I(f,"Three");function D(){let t=new THREE.Group,n=I(r=>new THREE.Mesh(new THREE.BoxBufferGeometry(T*20,c*20,3*20),new THREE.MeshPhongMaterial({color:r})),"createSection")(12252245);return n.receiveShadow=!0,t.add(n),t.position.z=1.5*20,t}I(D,"Grass");function L(){let t=new THREE.Group,o=I(_=>new THREE.Mesh(new THREE.PlaneBufferGeometry(T*20,c*20),new THREE.MeshPhongMaterial({color:_})),"createSection"),n=o(4541017);n.receiveShadow=!0,t.add(n);let r=o(3751241);r.position.x=-T*20,t.add(r);let E=o(3751241);return E.position.x=T*20,t.add(E),t}I(L,"Road");export{D as Grass,L as Road,f as Three};
