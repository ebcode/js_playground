organism = {};

organism.states = states;

organism.hungerClock = 100;
organism.metabolismRate = 0.01;


organism.isHungry = function(){
	if (this.hungerClock < 40){
		return true;
	} else {
		return false;
	}
}

organism.update = function(){
	this.hungerClock -= this.metabolismRate;
}
