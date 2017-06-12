
(function() {

	
	var alert = function() {
		alert("booyah");
	}
	
	function changeImage() {
		var pokeballImg = document.getElementById("icon01");
		pokeballImg.src = "images/mystery.gif";
	}

	
	function w3_open(){
	    if (document.getElementById("mySidebar").style.display === 'block') {
	        document.getElementById("mySidebar").style.display = 'none';
	        document.getElementById("myOverlay").style.display = "none";
	    } else {
	        document.getElementById("mySidebar").style.display = 'block';
	        document.getElementById("myOverlay").style.display = "block";
	    }
	}

// Close the sidebar with the close button
	function w3_close(){
	    document.getElementById("mySidebar").style.display = "none";
	    document.getElementById("myOverlay").style.display = "none";
	};

})();