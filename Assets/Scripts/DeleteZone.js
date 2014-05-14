#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider) {
	Debug.Log(other.gameObject.tag);
	Destroy(other.gameObject);
}