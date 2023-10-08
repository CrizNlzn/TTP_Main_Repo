// script.js
const nav = 
	document.querySelector(".primary-navigation");

const navHeight = 
	nav.offsetHeight;

document.documentElement.style.setProperty(
	"--scroll-padding",
	navHeight + "px"
);



