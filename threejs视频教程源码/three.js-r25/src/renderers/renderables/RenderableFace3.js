/**
 * @author mr.doob / http://mrdoob.com/
 */

THREE.RenderableFace3 = function () {

	this.v1 = new THREE.Vector2();
	this.v2 = new THREE.Vector2();
	this.v3 = new THREE.Vector2();

	this.centroidWorld = new THREE.Vector3();
	this.normalWorld = new THREE.Vector3();

	this.z = null;

	this.color = null;
	this.material = null;

};
