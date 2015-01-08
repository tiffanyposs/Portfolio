  var button = document.getElementById("button");
  var content = document.getElementById("content");

  button.addEventListener("click", function(){
    if(content.style.display==="block"){
    	content.style.display="none";
	}
	else{
		content.style.display="block";
	}
  })

  var button2 = document.getElementById("button_two")

  button2.addEventListener("click", function(){
    if(content.style.display==="block"){
      content.style.display="none";
  }
  else{
    content.style.display="block";
  }
  })

// this has a button event listener and will make the display
// of the set div appear and disappear when you click it