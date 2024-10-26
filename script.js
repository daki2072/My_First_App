
for(let i=1;i<200; i++){
    const shape= document.createElement("span");
    document.querySelector(".container").appendChild(shape);
}

 const letters= document.querySelectorAll(".letters span");

 letters.forEach((letter)=>{
     letter.addEventListener("click",(e)=>{
        e.target.classList.add("active");
     });
 }


 );