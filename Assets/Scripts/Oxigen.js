#pragma strict

class Oxigen extends Element {

	var CATION : int = 0;
	var ANION  : int = 2;

	function Start () {
		this.setIon(CATION, ANION);
	}

	function Update () {
		Debug.Log(this.adjacentElements.Count);
	}
	
}



