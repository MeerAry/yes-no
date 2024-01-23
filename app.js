const b=document.querySelector('button.naxer')
b.addEventListener("mouseover",moveHover)
function moveHover(){
  const i=Math.floor(Math.random()*500)+1;
  const j=Math.floor(Math.random()*500)+1;
  b.style.left=i+"px"
  b.style.top=j+"px"

}
function showalert(){
  window.location.href="yes.html";
}