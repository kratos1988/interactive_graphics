(function () {

	var spaceship = null

	var loader	= new THREE.OBJMTLLoader();

	loader.load('models/spaceship.obj', 'models/spaceship.mtl', function(mesh) {
		mesh.scale.set(0.2, 0.2, 0.2)
		mesh.rotation.set(0, Math.PI, 0)
		mesh.position.set(0, -25, 0)
		spaceship = mesh
		self.player = spaceship
		parent.add(self.player)
		self.loaded = true
	})
}());
