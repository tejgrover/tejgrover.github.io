const text = document.querySelector(".hover");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent="";
for(let i=0; i<splitText.length;i++){
  text.innerHTML +="<span>"+ splitText[i]+"</span>";
}

let char =0;
let timer = setInterval(onClick,50);

function onClick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add("fade");
  char++
  if(char === splitText.length){
    compelete();
    return;

  }
  function compelete(){
    clearInterval(timer);
    timer = null;
  }
}
