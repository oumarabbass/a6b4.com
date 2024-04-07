window.addEventListener("DOMContentLoaded", (event)=> {
    console.log("DOM entierement charge et analyse");
    setTimeout(function()  {
    document.getElementById("loader").style.top = "-100vh";
}, 10) 

inputs = document.querySelectorAll ("input:not(input[type=\"submit\"]), textarea"); 

inputs.forEach(e => {   
    e.addEventListener ("click", function() {
        inputs.forEach (e =>{

e.style.borderBottom ="2px solid #FF7E7E";

        })
        e.style.borderBottom = "2px  solid black";
 })
    
})

});