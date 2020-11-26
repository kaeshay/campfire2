backpackCounter=0;
function addBackpack(){
	element=document.getElementById("monster-teen").getElementsByTagName('img')[0];
	if(backpackCounter==0){
		element.src="assets/kay/monster-teen-backpack.png";
		backpackCounter++;
	} else if(backpackCounter==1){
		element.src="assets/kay/monster-teen.png";
		backpackCounter=0;
	}
}
hatCounter=0;
function addHat(){
	element=document.getElementById("monster-mom").getElementsByTagName('img')[0];
	if(hatCounter==0){
		element.src="assets/kay/monster-mom-hat.png";
		hatCounter++;
	} else if(hatCounter==1){
		element.src="assets/kay/monster-mom.png";
		hatCounter=0;
	}
}

balloonCounter=0;
function addBalloon(){
	element=document.getElementById("susan").getElementsByTagName('img')[0];
	if(balloonCounter==0){
		element.src="assets/rui/susan-balloon.png";
		balloonCounter++;
	} else if(balloonCounter==1){
		element.src="assets/rui/susan.png";
		balloonCounter=0;
	}
}
tofuCounter=0;
function destroyTofu(){
	element=document.getElementById("tofu").getElementsByTagName('img')[0];
	if(tofuCounter==0){
		element.src="assets/maria/tofudestroy.PNG";
		element.style.width="1000px";
		tofuCounter++;
	} else if(tofuCounter==1){
		element.src="assets/maria/tofuhappy.PNG";
		element.style.width="400px";
		tofuCounter=0;
	}
}
grandpaCounter=0;
function addGrandpa(){
	element=document.getElementById("grandpa").getElementsByTagName('img')[0];
	if(grandpaCounter==0){
		element.src="assets/kay/grandpa-loud.png";
		grandpaCounter++;
	} else if(grandpaCounter==1){
		element.src="assets/kay/grandpa.png";
		grandpaCounter=0;
	}
}
grandpaColorCounter=0;
function addGrandpaColor(){
	element=document.getElementById("grandpa-color").getElementsByTagName('img')[0];
	if(grandpaColorCounter==0){
		element.src="assets/kay/grandpa-loud-color.png";
		grandpaColorCounter++;
	} else if(grandpaColorCounter==1){
		element.src="assets/kay/grandpa-color.png";
		grandpaColorCounter=0;
	}
}
jimmyCounter=0;
function addMask(){
	element=document.getElementById("jimmy").getElementsByTagName('img')[0];
	if(jimmyCounter==0){
		element.src="assets/rui/jimmy-mask.png";
		jimmyCounter++;
	} else if(jimmyCounter==1){
		element.src="assets/rui/jimmy.png";
		jimmyCounter=0;
	}
}
lauraCounter=0;
function sadLaura(){
	element=document.getElementById("laura").getElementsByTagName('img')[0];
	if(lauraCounter==0){
		element.src="assets/kay/laura-sad.png";
		lauraCounter++;
	} else if(lauraCounter==1){
		element.src="assets/kay/laura.png";
		lauraCounter=0;
	}
}
var jacksonCounter=0;
function addJackson(){
	element=document.getElementById("jackson").getElementsByTagName('img')[0];
	if(jacksonCounter==0){
		element.src="assets/kay/jackson-mouth.png";
		jacksonCounter++;
	} else if(jacksonCounter==1){
		element.src="assets/kay/jackson.png";
		jacksonCounter=0;
	}
}
var bookCounter=0;
function openBook(){
	element=document.getElementById("spellbook").getElementsByTagName('img')[0];
	if(bookCounter==0){
		element.src="assets/rui/spellbook-open.png";
		element.style.width="120px";
		bookCounter++;
	} else if(bookCounter==1){
		element.src="assets/rui/spellbook.png";
		element.style.width="70px";
		bookCounter=0;
	}
}
var dayCounter;
function nightTime(){
	backgroundContainer=document.getElementById('containment-wrapper');
	sun=document.getElementById('sun')
	if(dayCounter == 0){
		backgroundContainer.style.backgroundColor='black';
		sun.src="assets/kay/moon.gif";
		dayCounter++;
	}
	else{
		backgroundContainer.style.backgroundColor='white';
		sun.src="assets/kay/sun.png";	
		dayCounter = 0;
	}
}
var green1Counter=0;
function turnGreen(nameString, idString){
	element=document.getElementsByClassName(idString)[0];
	if(green1Counter==0){
		element.src="assets/"+nameString+"/"+idString+".png";
		green1Counter++;
	} else if(green1Counter==1){
		element.src="assets/"+nameString+"/"+idString+"-green.png";
		green1Counter=0;
	}
}
var emergencyCounter=0;
function emergencyOn(){
	element=document.getElementById("emergencyCover");
	if(emergencyCounter==0){
		element.style.display="block";
		emergencyCounter++;
	} else if(emergencyCounter==1){
		element.style.display="none";
		emergencyCounter=0;
	}
}

var turnCounter=0;
function turnSwitch(){
	element=document.getElementById("turnButton");
	if(turnCounter==0){
		element.src="assets/icons/rui.png";
		turnCounter++;
	} else if(turnCounter==1){
		element.src="assets/icons/dirar.png";
		turnCounter++;
	} else if(turnCounter==2){
		element.src="assets/icons/aziz.png";
		turnCounter++;
	} else if(turnCounter==3){
		element.src="assets/icons/aristotle.png";
		turnCounter++;
	} else if(turnCounter==4){
		element.src="assets/icons/default.png";
		turnCounter=0;
	}
}

var autobotCounter=0;
function mrFiretruck(){
	element=document.getElementsByClassName('firetruck')[0];
	if(autobotCounter==0){
		element.src="assets/kay/firetruck.png";
		autobotCounter++;
	} else if(autobotCounter==1){
		element.src="assets/kay/mr-firetruck.png";
		autobotCounter=0;
	}
}

var closetCounter=0;
function openCloset(){
	element=document.getElementById('closet');
	clothes=document.getElementById('clothes');
	if(closetCounter==0){
		clothes.style.display='block';
		element.src="assets/kay/closet/closet2.png";
		element.style.width="400px";
		closetCounter++;
	} else if(closetCounter==1){
		clothes.style.display='none';
		element.src="assets/kay/closet/closet1.png";
		element.style.width="300px";
		closetCounter=0;
	}
}

function shrinkRanger(){
	element=document.getElementsByClassName('big-ranger')[0];
	var currWidth = element.clientWidth;
	  if(currWidth == 10){
	        alert("min zoom-in level reached.");
	    } else{
	        element.style.width = (currWidth - 50) + "px";
	    } 
	element.style.width-=10;
}

var rocketCounter=0;
function rocketLaunch(){
	element=document.getElementsByClassName('kayRocket')[0];
	if(rocketCounter==0){
		element.src="assets/kay/rocket-on.png";
		rocketCounter++;
	} else if(rocketCounter==1){
		element.src="assets/kay/rocket.png";
		rocketCounter=0;
	}
}

var transformCounter=0;
function transform(makerString, classString){
	element=document.getElementsByClassName(classString)[0];
	if(transformCounter==0){
		element.src="assets/"+makerString+"/"+classString+"-on.png";
		transformCounter++;
	} else if(transformCounter==1){
		element.src="assets/"+makerString+"/"+classString+".png";
		transformCounter=0;
	}
}