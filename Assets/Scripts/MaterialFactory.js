#pragma strict

var Hydrogen : Transform;
var Oxigen	 : Transform;

function Start () {

}

function Update () {
	if(Input.GetKeyDown("h")) {
		Instantiate(Hydrogen, new Vector3(transform.position.x, transform.position.y, transform.position.z), transform.rotation);
	}
	if(Input.GetKeyDown("o")) {
		Instantiate(Oxigen, new Vector3(transform.position.x, transform.position.y, transform.position.z), transform.rotation);
	}
}