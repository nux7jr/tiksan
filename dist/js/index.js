const slider=()=>{const s=document.querySelectorAll(".slide");for(slide of s)slide.addEventListener("click",e=>{s.forEach(e=>{e.classList.remove("active")}),console.log(e),console.log(e.target),e.target.classList.add("active")})};slider();