
		el=document.querySelector("h2");
		el.classList.add("accessibly-hidden");
		document.querySelector(".button").addEventListener("click", function(){
			el.classList.remove("accessibly-hidden");
		})