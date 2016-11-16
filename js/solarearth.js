
(function () {

	var controls1;
	var webglEl = document.getElementById('webgl');

	if (!Detector.webgl) {
		Detector.addGetWebGLMessage(webglEl);
		return;
	}

	var width  = 1300,
		height = window.innerHeight;

	// Earth params
	var radius   = 35	,
		segments = 30,
		starting = 10;
		rotation = 1;

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 200);
	camera.position.x = 100;
	camera.position.z = 60;
	camera.position.y = 45;

	var renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
	renderer.setSize(width, height);
	controls1 = new function() {
		this.spaceshipView= true ;
		this.solarSystemView= true ;
	}
	var gui = new dat.GUI();
	gui.add(controls1, 'spaceshipView',true,false);
	gui.add(controls1, 'solarSystemView',true,false);
	// general light //
	scene.add(new THREE.AmbientLight(0x333333));

	var light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(5,3,5);
	scene.add(light);

    var sphere = createmercury(radius/5, segments);
	sphere.rotation.y = rotation;
    sphere.position.x=starting+10;
	scene.add(sphere)
	var clouds = createClouds(radius/5, segments);
	clouds.rotation.y = rotation;
	clouds.position.x=starting+10;
	scene.add(clouds);
	var tgeometry = new THREE.TorusGeometry(starting+10, 0.001,5,100);
    var tmaterial = new THREE.MeshBasicMaterial( { color: 0x000000 } ); // color of plane
    var torus = new THREE.Mesh( tgeometry, tmaterial );
    torus.rotation.x=0.5*Math.PI;
    torus.position.x=0;
    torus.add(sphere);
    torus.add(clouds);
  
    var earth = createSphere(radius/1, segments);
	earth.rotation.x =-0.5*Math.PI;
    earth.position.x=starting+2;
	var clouds_earth = createClouds(radius*1.012, segments);
	clouds_earth.rotation.x = 1*Math.PI;
	clouds_earth.position.x=starting+2;
	var tgeometry_earth = new THREE.TorusGeometry(starting+20, 0.001,5,100);
	var torus_earth = new THREE.Mesh(tgeometry_earth, tmaterial );
    torus_earth.rotation.x=0.5*Math.PI;
    torus_earth.position.x=0;
    torus_earth.add(clouds_earth);
    torus_earth.add(earth)
    scene.add(torus_earth);
	
	
	var stars = createStars(300, 100);
	scene.add(stars);
	

	var controls = new THREE.TrackballControls(camera);

	webglEl.appendChild(renderer.domElement);

	render();
	function render() {
		if (controls1.spaceshipView == false) {
			document.location.href = 'index2.html';
		}
		if (controls1.solarSystemView == false) {
			document.location.href = 'index.html';
		}
		var speed=0.001;
		controls.update();
		sphere.rotation.z += 0.01;
		torus.rotation.z+=speed;
		clouds.rotation.z += 0.01;
	
		torus_earth.rotation.z+=speed/2.1;
		earth.rotation.y-=0.001;
		clouds_earth.rotation.z+=0.001;


		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}

	function createSphere(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/2_no_clouds_4k.jpg'),
					bumpMap:     THREE.ImageUtils.loadTexture('images/elev_bump_4k.jpg'),
					bumpScale:   2,
					specularMap: THREE.ImageUtils.loadTexture('images/water_4k.png'),
					specular:    new THREE.Color('grey')
			})
		);
	}
	function createmercury(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/mercury.jpg'),
			})
		);
	}
	
	function createClouds(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius + 0.005, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/fair_clouds_4k.png'),
				transparent: true
			})
		);
	}
	function createStars(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshBasicMaterial({
				map:  THREE.ImageUtils.loadTexture('images/stars_milkyway.jpg'),
				side: THREE.BackSide
			})
		);
	}

}());