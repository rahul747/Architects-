
const navShow=()=>{
	 const burger=document.querySelector('.burger');
	 const ul=document.querySelector('.nav-links');
	 const ulItem=document.querySelectorAll('nav-links li a');

	 burger.addEventListener('click',()=>{
	 	//toggle
	 	ul.classList.toggle('nav-active');
	 	burger.classList.toggle('toggle');

	 });

};
navShow();