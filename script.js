window.onscroll = function() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
  const bar = document.getElementById("progressBar");
  if (bar) bar.style.width = scrolled + "%";
};

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