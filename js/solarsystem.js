
(function () {

	var webglEl = document.getElementById('webgl');

	if (!Detector.webgl) {
		Detector.addGetWebGLMessage(webglEl);
		return;
	}

	var width  = 1300,
		height = window.innerHeight;

	// Earth params
	var radius   = 3,
		segments = 30,
		starting = 20;
		rotation = 6;

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
	camera.position.z = 100;
	camera.position.y = 60;
	camera.position.x = 180;
	var renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
	renderer.setSize(width, height);
	var spaceshipViewButton = { SpaceshipView:function(){document.location.href = 'index2.html';}};
	var earthViewButton = { EarthView:function(){document.location.href = 'index1.html';}};
	controls1 = new function() {
		this.extraLight = true ;
	}
	var gui = new dat.GUI();
	gui.add(spaceshipViewButton, 'SpaceshipView').name('Move The Ship');
	gui.add(earthViewButton, 'EarthView').name('The Amazing Earth');
	gui.add(controls1, 'extraLight', true, false).name('More Light!');
	// general light //
	//scene.add(new THREE.AmbientLight(0x333333));

	var light1 = new THREE.DirectionalLight(0xffffff, 1);
	light1.position.set(5,3,5);
	light1.visible = true;
	scene.add(light1);
	var light = new THREE.PointLight(0xffffff, 1, 300);
	light.position.set(0,0,0);
	scene.add(light);
	

		var speed=0.01;
    var sphere = createmercury(radius/5, segments);
	sphere.rotation.y = rotation;
	//sphere.position.set(0,45,0);
    sphere.position.x=starting+2.5;
	scene.add(sphere)
	var clouds = createClouds(radius/5, segments);
	clouds.rotation.y = rotation;
//	clouds.position.set(0,45,0);
	clouds.position.x=starting+2.5;
	scene.add(clouds);
	var tgeometry = new THREE.TorusGeometry(starting+2.5, 0.007,5,100);
    var tmaterial = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } ); // color of plane
    var torus = new THREE.Mesh( tgeometry, tmaterial );
    torus.rotation.x=0.5*Math.PI;
    torus.position.x=0;
    torus.add(sphere);
    torus.add(clouds);
    scene.add( torus );

    var venus = createvenus(radius/4, segments);
	venus.rotation.y = rotation;
//	venus.position.set(0,10,0);
    venus.position.x=starting+5;
	var clouds_venus = createClouds(radius/4, segments);
	clouds_venus.rotation.y = rotation;

	//clouds_venus.position.set(0,10,0);
	clouds_venus.position.x=starting+5;
	var tgeometry_venus = new THREE.TorusGeometry(starting+5, 0.007,5,100);
	var torus_venus = new THREE.Mesh(tgeometry_venus, tmaterial );
    torus_venus.rotation.x=0.5*Math.PI;
    torus_venus.position.x=0;
    torus_venus.add(clouds_venus);
    torus_venus.add(venus)
    scene.add(torus_venus);

    var earth = createSphere(radius/3.5, segments);
	earth.rotation.x =-0.5*Math.PI;
    earth.position.x=starting+7.5;
	var clouds_earth = createClouds(radius/3.5, segments);
	clouds_earth.rotation.y = rotation;
	clouds_earth.position.x=starting+7.5;
	var tgeometry_earth = new THREE.TorusGeometry(starting+7.5, 0.03,5,100);
	var torus_earth = new THREE.Mesh(tgeometry_earth, tmaterial );
    torus_earth.rotation.x=0.5*Math.PI;
    torus_earth.position.x=0;
    torus_earth.add(clouds_earth);
    torus_earth.add(earth)
    scene.add(torus_earth);


    var mars = createmars(radius/3.2, segments);
    mars.position.x=starting+10.5;
    mars.rotation.x =-0.5*Math.PI;
	var tgeometry_mars = new THREE.TorusGeometry(starting+10.5, 0.007,5,100);
	var torus_mars = new THREE.Mesh(tgeometry_mars, tmaterial );
    torus_mars.position.x=0;
    torus_mars.rotation.x=0.5*Math.PI;
    torus_mars.add(mars)
    scene.add(torus_mars);


    var jupiter = createjupiter(radius, segments);
	jupiter.rotation.x =-0.5*Math.PI;
    jupiter.position.x=starting+23;
	var clouds_jupiter = createClouds(radius*1.002, segments);
	clouds_jupiter.rotation.y = rotation;
	clouds_jupiter.position.x=starting+23;
	var tgeometry_jupiter = new THREE.TorusGeometry(starting+23, 0.007,5,100);
	var torus_jupiter = new THREE.Mesh(tgeometry_jupiter, tmaterial );
    torus_jupiter.rotation.x=0.5*Math.PI;
    torus_jupiter.position.x=0;
    torus_jupiter.add(clouds_jupiter);
    torus_jupiter.add(jupiter)
    scene.add(torus_jupiter);

    var ring_material = new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/saturn_ring.jpg')});
    var circleGeometry = new THREE.CircleGeometry( radius, 32 );
    var circleGeometry2 = new THREE.CircleGeometry( radius, 32 );
    var circle = new THREE.Mesh(circleGeometry,ring_material );
    var circle2 = new THREE.Mesh(circleGeometry2,ring_material );
    circle2.rotation.x=-Math.PI;
    circle.rotation.z=Math.PI;
    circle.rotation.x=-Math.PI/2;
    circle2.rotation.x=Math.PI/2;

    var saturn = createsaturn(radius/1.7, segments);
    saturn.position.x=starting+40;
    saturn.rotation.x =-0.5*Math.PI;
    saturn.add(circle);
    saturn.add(circle2);
	var tgeometry_saturn = new THREE.TorusGeometry(starting+40, 0.007,5,100);
	var torus_saturn = new THREE.Mesh(tgeometry_saturn, tmaterial );
    torus_saturn.position.x=0;
    torus_saturn.rotation.x=0.5*Math.PI;
    saturn.rotation.x=-Math.PI/3;
    torus_saturn.add(saturn)
    scene.add(torus_saturn);


    var U_ring_material = new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/uranus_ring.png')});
    var U_circleGeometry = new THREE.CircleGeometry( radius, 32 );
    var U_circleGeometry2 = new THREE.CircleGeometry( radius, 32 );
    var U_circle = new THREE.Mesh(U_circleGeometry,U_ring_material );
    var U_circle2 = new THREE.Mesh(U_circleGeometry2,U_ring_material );
    U_circle2.rotation.x=-Math.PI;
    U_circle.rotation.z=Math.PI;
    U_circle.rotation.x=-Math.PI/2;
    U_circle2.rotation.x=Math.PI/2;

    var uranus = createuranus(radius/1.7, segments);
    uranus.position.x=starting+75;
    uranus.rotation.x =-0.5*Math.PI;
    uranus.add(U_circle);
    uranus.add(U_circle2);
	var tgeometry_uranus = new THREE.TorusGeometry(starting+75, 0.007,5,100);
	var torus_uranus = new THREE.Mesh(tgeometry_uranus, tmaterial );
    torus_uranus.position.x=0;
    torus_uranus.rotation.x=0.5*Math.PI;
    uranus.rotation.x=-Math.PI/6;
    torus_uranus.add(uranus)
    scene.add(torus_uranus);


    var neptune = createneptune(radius/3.2, segments);
    neptune.position.x=starting+107.5;
    neptune.rotation.x =-0.5*Math.PI;
	var tgeometry_neptune = new THREE.TorusGeometry(starting+107.5, 0.007,5,100);
	var torus_neptune = new THREE.Mesh(tgeometry_neptune, tmaterial );2
    torus_neptune.position.x=0;
    torus_neptune.rotation.x=0.5*Math.PI;
    torus_neptune.add(neptune)
    scene.add(torus_neptune);

    var textureFlare0 = THREE.ImageUtils.loadTexture("images/lensflare/lensflare88.jpg");
    var textureFlare3 = THREE.ImageUtils.loadTexture("images/lensflare/lensflare3.png");

    var flareColor = new THREE.Color(0xffaacc);
    var lensFlare = new THREE.LensFlare(textureFlare0, 400, 0.0, THREE.AdditiveBlending, flareColor);

    lensFlare.add(textureFlare3, 60, 0.6, THREE.AdditiveBlending);
    lensFlare.add(textureFlare3, 70, 0.7, THREE.AdditiveBlending);
    lensFlare.add(textureFlare3, 120, 0.9, THREE.AdditiveBlending);
    lensFlare.add(textureFlare3, 70, 1.0, THREE.AdditiveBlending);

    lensFlare.position.x=0;
    lensFlare.position.y=0;
    lensFlare.position.z=0;
    scene.add(lensFlare);
	var stars = createStars(240, 100);
	scene.add(stars);

	//var spaceship = null
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath( 'models/' );
	mtlLoader.load( 'Shuttle01.mtl', function( materials ) {//	materials.preload();
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials( materials );
		objLoader.setPath( 'models/' );
		objLoader.load( 'Shuttle01.obj', function ( object ) {

			object.position.x =starting+75;
		//	object.position.y = 0.09;
			//object.position.z = 5;
			object.scale.x = 0.008;
			object.scale.y = 0.008;
			object.scale.z = 0.008;
object.rotation.x = 5;
			var tgeometry11 = new THREE.TorusGeometry(starting+75, 0.001,5,100);
				var tmaterial11 = new THREE.MeshBasicMaterial( { color: 0x000000 } ); // color of plane
				var torus11 = new THREE.Mesh( tgeometry11, tmaterial11 );
			torus11.rotation.x=0.41*Math.PI;
			torus11.position.x=0;
torus11.position.z=15;

		//	torus.add(sphere);
			torus11.add(object);
			scene.add( torus11 );

			//scene.add( object );




			//var spaceship = null
			var mtlLoader = new THREE.MTLLoader();
			mtlLoader.setPath( 'models/' );
			mtlLoader.load( 'Shuttle01.mtl', function( materials ) {//	materials.preload();
				var objLoader = new THREE.OBJLoader();
				objLoader.setMaterials( materials );
				objLoader.setPath( 'models/' );
				objLoader.load( 'Shuttle01.obj', function ( object2 ) {

					object2.position.x =starting+40;
				//	object.position.y = 0.09;
					object.position.z = 5;
					object2.scale.x = 0.008;
					object2.scale.y = 0.008;
					object2.scale.z = 0.008;
			object2.rotation.x = 5;
					var tgeometry12 = new THREE.TorusGeometry(starting+40, 0.001,5,100);
						var tmaterial12 = new THREE.MeshBasicMaterial( { color: 0x000000 } ); // color of plane
						var torus12 = new THREE.Mesh( tgeometry12, tmaterial12 );
					torus12.rotation.x=0.4*Math.PI;
					torus12.position.x=0;


				//	torus.add(sphere);
					torus12.add(object2);
					scene.add( torus12 );

					//scene.add( object );

	var controls = new THREE.TrackballControls(camera);

	webglEl.appendChild(renderer.domElement);

	render();
	function render() {

		controls.update();
		light1.visible = controls1.extraLight;
		object2.position.z +=0.01;
		torus12.rotation.z +=0.009;

		object.position.z -=0.005;
		torus11.rotation.z +=0.005;
		sphere.rotation.z += 0.01;
		torus.rotation.z+=speed;
		clouds.rotation.z += 0.01;
	
		venus.rotation.z+=0.01;		
		torus_venus.rotation.z+=speed*0.7;
		clouds_venus.rotation.z+=0.01;
		
		earth.rotation.y-=0.01;
		torus_earth.rotation.z+=speed*0.6;
		clouds_earth.rotation.z+=0.01;
		
        mars.rotation.y-=0.01;
        torus_mars.rotation.z+=speed*0.5;

		jupiter.rotation.y-=0.005;
		torus_jupiter.rotation.z+=speed*0.27;
		clouds_jupiter.rotation.z+=0.005;

        saturn.rotation.y+=0.005;
        torus_saturn.rotation.z+=speed*0.2;

        uranus.rotation.y+=0.0050;
        torus_uranus.rotation.z+=speed*0.14;

        neptune.rotation.y-=0.01;
        torus_neptune.rotation.z+=speed*0.12;

		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
});

		});
});

		});


	function createSphere(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/2_no_clouds_4k.jpg'),
					bumpMap:     THREE.ImageUtils.loadTexture('images/elev_bump_4k.jpg'),
					bumpScale:   0.005,
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
    function createvenus(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/venus.jpg'),
			})
		);
	}
	function createjupiter(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/jupiter.jpg'),

			})
		);
	}
	function createmars(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/mars.jpg'),
			})
		);
	}
	function createsaturn(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/saturn.jpg'),
			})
		);
	}
	function createuranus(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/uranus.jpg'),
				specularMap: THREE.ImageUtils.loadTexture('images/glow.jpg'),
				specular:    new THREE.Color('grey')
			})
		);
	}
    function createneptune(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/new_neptune.jpg'),
				specularMap: THREE.ImageUtils.loadTexture('images/glow.jpg'),
				specular:    new THREE.Color('grey')
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