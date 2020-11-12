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
