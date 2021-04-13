var enterBtn = document.getElementById("addItem");
var inpField = document.getElementById("inputField");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function getinputLength(){
	return inpField.value.length;
} 

function getlistLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(inpField.value));  
	ul.appendChild(li);  
	inpField.value = "";  


	 
	function cancelOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",cancelOut);
	 


	 
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	 


	 
	function deleteListItem(){
		li.classList.add("delete")
	}
	 
}


function addListAfterClick(){
	if (getinputLength() > 0) {  
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (getinputLength() > 0 && event.which === 13) {  
		createListElement();
	} 
}


enterBtn.addEventListener("click",addListAfterClick);

inpField.addEventListener("keypress", addListAfterKeypress);


