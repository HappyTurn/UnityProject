#pragma strict

var waterParticle : ParticleSystem;
var particleGenerator : GameObject;

function Start () {

}

function Update () {
		
	if(!waterParticle.isPlaying) {
		Debug.Log("Stop");
		Destroy(particleGenerator.gameObject);
	}
}
