#pragma strict
import System.Collections.Generic;

class Element extends MonoBehaviour {
	public var cation : int;	//陽イオン数
	public var anion  : int;    //陰イオン数
	public var adjacentElements  : List.<GameObject> = new List.<GameObject>();		//接している分子のリスト

	public function OnCollisionEnter(other : Collision) {

		//元素以外とは判定しない
		if(other.gameObject.tag == "NotElement") return;

		var otherScript : Element = other.gameObject.GetComponent(Element);

		//異なるイオン同士ならば結合する
		if(checkOppositeSign(this.cation, otherScript.cation)) {
			Debug.Log("JOINT!");
			adjacentElements.Add(other.gameObject);
			Debug.Log(this.adjacentElements.Count);

		} else {
			Debug.Log("CAN NOT JOINT!");
		}

	}

	public function OnCollisionExit(other : Collision) {

		//元素以外とは判定しない
		if(other.gameObject.tag == "NotElement") return;

		adjacentElements.Remove(other.gameObject);
		Debug.Log("UNJOINT!");
		Debug.Log(this.adjacentElements.Count);
	}

	public function setIon(cation : int, anion : int) {
		this.cation = cation;
		this.anion = anion;
	} 

	function Start () {

	}

	function Update () {
		
	}

}

function checkOppositeSign(val1 : int, val2 : int ) {
	if(val1 > 0 && val2 <= 0) {
		return true;
	} else if(val1 < 0 && val2 >= 0) {
		return true;
	}
	return false;
}




