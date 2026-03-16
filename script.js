/* Scroll progress bar */

window.onscroll = function() {
let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled = (winScroll / height) * 100;
document.getElementById("progressBar").style.width = scrolled + "%";
};

/* Auto Table of Contents */

document.addEventListener("DOMContentLoaded", function(){

const toc = document.getElementById("toc-list");
if(!toc) return;

const headers = document.querySelectorAll("h2");

headers.forEach((header, index) =>{

const id = "section-" + index;
header.id = id;

const li = document.createElement("li");
const link = document.createElement("a");

link.href = "#" + id;
link.textContent = header.textContent;

li.appendChild(link);
toc.appendChild(li);

});

});