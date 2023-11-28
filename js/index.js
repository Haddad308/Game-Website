import {mainFlow,hideDetails} from "./dom.js"

let links = document.querySelectorAll(".nav-link"); 
let closeIcon = document.querySelector(".close"); 


closeIcon.addEventListener("click",function(){
    hideDetails(); 
})

// Default view. 
mainFlow("MMORPG");


// ? Adding functionality for each links (NavBar) . 
for(let i=0; i<links.length; ++i){
    links[i].addEventListener("click",function(event){
        // Check where is the active and remove it. 
        for(let m=0; m<links.length; ++m){
            let link = links[m]
            if(link.classList.contains("active")) 
                link.classList.remove("active")
        }
        // add active class. 
        event.target.classList.add("active");
        // Call the new data. 
        mainFlow(event.target.innerHTML);
    })
}




