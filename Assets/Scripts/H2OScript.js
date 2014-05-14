#pragma strict

class H2O {
	public var waterParticle : ParticleSystem;
	function Start () {

	}

	function Update () {
		if(!waterParticle.isPlaying) {
			Debug.Log("Stop");
		}
	}
}
