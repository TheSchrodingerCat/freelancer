/*
 * Archivo principal de JS
 */

 (function main(){
 	var boxes = Array.from(document.getElementsByClassName("cajita"));
 	var modal = document.getElementById("box-portfolio-modal");

 	var bodyModal, close, img, title, textTitle;
 		boxes.forEach(function(box){
 			box.addEventListener("click", function(){

 				modal.innerHTML = ""; //si no lo pongo no se ve el botón close....

 				//var text = document.getElementById("texto" + boxes.indexOf(box).toString());
				//text.classList.toggle("hide");

				//tamaño de imagen en modal (no resulta)
				//var img = document.getElementById("images" + boxes.indexOf(box).toString());
				//img.classList.add("big-image");

 				bodyModal = document.createElement("div");
 				bodyModal.classList.add("modal-body");

 				//título
 				/*title = document.createElement("h1");
 				title.classList.add("modal-title");
 				textTitle = document.createTextNode("Proyect Title");

 				title.appendChild(textTitle);
 				bodyModal.appendChild(title);*/

 				bodyModal.innerHTML = box.innerHTML;
 				modal.appendChild(bodyModal);
 				modal.classList.remove("hide");
				close = document.createElement("div");
				close.classList.add("close");

				img = document.createElement("img");
				img.setAttribute("src", "https://www.iconfinder.com/data/icons/virtual-notebook/16/button_close-128.png");
				close.appendChild(img);
				modal.appendChild(close);
				close.addEventListener("click",function(){
				modal.classList.add("hide");
				//text.classList.toggle("hide");
			});
		});
 	});
 })();