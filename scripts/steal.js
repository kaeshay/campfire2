const loot = document.querySelectorAll('.avatar,.vehicle,.building,.item');

for (var i = 0; i < loot.length; i++) {
    loot[i].addEventListener('click', function(e) { 
    	if (e.altKey) {
    		console.log(this);
    		this.style.display="none";
    	}
	})	
}
