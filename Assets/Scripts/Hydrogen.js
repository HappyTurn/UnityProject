#pragma strict

class Hydrogen extends Element {

	var CATION : int = 1;
	var ANION  : int = 0;

	function Start () {
		this.setIon(CATION, ANION);
	}

	function Update () {
		
	}

}


