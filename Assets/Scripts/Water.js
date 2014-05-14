#pragma strict

//var REQUIRED_HYDROGEN : const int = 2;
//var REQUIRED_OXIGEN   : const int = 1;

var hydrogen : GameObject[];
var oxigen   : GameObject[];

var H2O : Transform;


function Start () {

}

function Update () {
	
		hydrogen = GameObject.FindGameObjectsWithTag("Hydrogen");
		oxigen = GameObject.FindGameObjectsWithTag("Oxigen");

		for(var obj : GameObject in oxigen) {
			var oxigenScript : Oxigen = obj.GetComponent(Oxigen);

		}

	}
	