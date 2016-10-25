function setMercury () {
    mercury = createmercury(radius/5, segments);
	mercury.rotation.y = rotation;
    mercury.position.x=starting+2.5;
	scene.add(mercury)
	clouds_mercury = createClouds(radius/5, segments);
	clouds_mercury.rotation.y = rotation;
	clouds_mercury.position.x=starting+2.5;
	scene.add(clouds_mercury);
	var tgeometry = new THREE.TorusGeometry(starting+2.5, 0.007,5,100);
    torus_mercury = new THREE.Mesh( tgeometry, tmaterial );
    torus_mercury.rotation.x=0.5*Math.PI;
    torus_mercury.position.x=0;
    torus_mercury.add(mercury);
    torus_mercury.add(clouds_mercury);
    scene.add(torus_mercury);
}

function setVenus() {
	venus = createvenus(radius/4, segments);
	venus.rotation.y = rotation;
    venus.position.x=starting+5;
	clouds_venus = createClouds(radius/4, segments);
	clouds_venus.rotation.y = rotation;
	clouds_venus.position.x=starting+5;
	var tgeometry_venus = new THREE.TorusGeometry(starting+5, 0.007,5,100);
	torus_venus = new THREE.Mesh(tgeometry_venus, tmaterial );
    torus_venus.rotation.x=0.5*Math.PI;
    torus_venus.position.x=0;
    torus_venus.add(clouds_venus);
    torus_venus.add(venus)
    scene.add(torus_venus);
}

function setNeptune() {
	neptune = createneptune(radius/3.2, segments);
    neptune.position.x=starting+107.5;
    neptune.rotation.x =-0.5*Math.PI;
	var tgeometry_neptune = new THREE.TorusGeometry(starting+107.5, 0.007,5,100);
	torus_neptune = new THREE.Mesh(tgeometry_neptune, tmaterial );2
    torus_neptune.position.x=0;
    torus_neptune.rotation.x=0.5*Math.PI;
    torus_neptune.add(neptune)
    scene.add(torus_neptune);
}

function setUranus() {
    uranus = createuranus(radius/1.7, segments);
    uranus.position.x=starting+75;
    uranus.rotation.x =-0.5*Math.PI;
	var U_ring_material = new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/uranus_ring.png')});
    var U_circleGeometry = new THREE.CircleGeometry( radius, 32 );
    var U_circleGeometry2 = new THREE.CircleGeometry( radius, 32 );
    var U_circle = new THREE.Mesh(U_circleGeometry,U_ring_material );
    var U_circle2 = new THREE.Mesh(U_circleGeometry2,U_ring_material );
    U_circle2.rotation.x=-Math.PI;
    U_circle.rotation.z=Math.PI;
    U_circle.rotation.x=-Math.PI/2;
    U_circle2.rotation.x=Math.PI/2;
    uranus.add(U_circle);
    uranus.add(U_circle2);
	var tgeometry_uranus = new THREE.TorusGeometry(starting+75, 0.007,5,100);
	torus_uranus = new THREE.Mesh(tgeometry_uranus, tmaterial );
    torus_uranus.position.x=0;
    torus_uranus.rotation.x=0.5*Math.PI;
    uranus.rotation.x=-Math.PI/6;
    torus_uranus.add(uranus)
    scene.add(torus_uranus);
}

function setEarth () {
    earth = createSphere(radius/3.5, segments);
	earth.rotation.x =-0.5*Math.PI;
    earth.position.x=starting+7.5;
	clouds_earth = createClouds(radius/3.5, segments);
	clouds_earth.rotation.y = rotation;
	clouds_earth.position.x=starting+7.5;
	var tgeometry_earth = new THREE.TorusGeometry(starting+7.5, 0.03,5,100);
	torus_earth = new THREE.Mesh(tgeometry_earth, tmaterial );
    torus_earth.rotation.x=0.5*Math.PI;
    torus_earth.position.x=0;
    torus_earth.add(clouds_earth);
    torus_earth.add(earth)
    scene.add(torus_earth);
}

function setMars() {
    mars = createmars(radius/3.2, segments);
    mars.position.x=starting+10.5;
    mars.rotation.x =-0.5*Math.PI;
	tgeometry_mars = new THREE.TorusGeometry(starting+10.5, 0.007,5,100);
	torus_mars = new THREE.Mesh(tgeometry_mars, tmaterial );
    torus_mars.position.x=0;
    torus_mars.rotation.x=0.5*Math.PI;
    torus_mars.add(mars)
    scene.add(torus_mars);
}

function setJupiter() {
    jupiter = createjupiter(radius, segments);
	jupiter.rotation.x =-0.5*Math.PI;
    jupiter.position.x=starting+23;
	clouds_jupiter = createClouds(radius*1.002, segments);
	clouds_jupiter.rotation.y = rotation;
	clouds_jupiter.position.x=starting+23;
	var tgeometry_jupiter = new THREE.TorusGeometry(starting+23, 0.007,5,100);
	torus_jupiter = new THREE.Mesh(tgeometry_jupiter, tmaterial );
    torus_jupiter.rotation.x=0.5*Math.PI;
    torus_jupiter.position.x=0;
    torus_jupiter.add(clouds_jupiter);
    torus_jupiter.add(jupiter)
    scene.add(torus_jupiter);
}

function setSaturn() {
    saturn = createsaturn(radius/1.7, segments);
    saturn.position.x=starting+40;
    saturn.rotation.x =-0.5*Math.PI;
	var ring_material = new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/saturn_ring.jpg')});
    var circleGeometry = new THREE.CircleGeometry( radius, 32 );
    var circleGeometry2 = new THREE.CircleGeometry( radius, 32 );
    var circle = new THREE.Mesh(circleGeometry,ring_material );
    var circle2 = new THREE.Mesh(circleGeometry2,ring_material );
    circle2.rotation.x=-Math.PI;
    circle.rotation.z=Math.PI;
    circle.rotation.x=-Math.PI/2;
    circle2.rotation.x=Math.PI/2;
    saturn.add(circle);
    saturn.add(circle2);
	var tgeometry_saturn = new THREE.TorusGeometry(starting+40, 0.007,5,100);
	torus_saturn = new THREE.Mesh(tgeometry_saturn, tmaterial );
    torus_saturn.position.x=0;
    torus_saturn.rotation.x=0.5*Math.PI;
    saturn.rotation.x=-Math.PI/3;
    torus_saturn.add(saturn)
    scene.add(torus_saturn);
}