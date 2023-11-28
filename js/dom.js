import {getGamesByTag,getDetailsByID} from "./apiCalls.js"

let gamesContainer = document.getElementById("games-cards")
let detailsPage = document.querySelector("#details")


export function showDetails(){
    detailsPage.classList.remove("d-none");
    gamesContainer.classList.add("d-none");
}

export function hideDetails(){
    detailsPage.classList.add("d-none");
    gamesContainer.classList.remove("d-none");
}

export function fillRows(gamesData){
    gamesContainer.innerHTML = ` `;
    for(let i=0; i<gamesData.length ; ++i){
        let game = gamesData[i]
        let card = `
            <div class="col-3 my-3 border-0" id="${game.id}" >
                <div class="card  ">
                    <div class="card-content p-3  ">
                        <picture>
                            <img class="w-100" src="${game.thumbnail}" alt="">
                        </picture>
                        <div class="d-flex justify-content-between mt-3" >
                        <h3>${game.title}</h3>
                        <p class="free" >Free</p>
                        </div>
                        <p class="c" >${game.short_description}</p>
                    </div>
                    <div class="card-f d-flex py-2 justify-content-between px-3 ">
                        <div class="tag">MMORPG</div>
                        <div class="tag">PC (Windows)</div>
                    </div>
                </div>
            </div>
        `;
        gamesContainer.innerHTML += card; 
    }
}


function fillDetials(gamesData){
    
    let deailsContainer = detailsPage.querySelector(".game-details")
    deailsContainer.innerHTML = ``;
    let card = `
        <picture class="col-4">
        <img class="w-100" src="${gamesData.thumbnail}" alt="">
        </picture>
        <div class="col-8   ">
            <h1>Title: Diablo Immortal Category: MMOARPG</h1>
            <p>Category: <span class="tag2">${gamesData.genre}</span></p>
            <p>Platform: <span class="tag2">${gamesData.platform}</span></p>
            <p>Statues: <span class="tag2">${gamesData.status}</span></p>
            <p>${gamesData.description}</p>
            <button id="showbtn" class="btn btn-primary">Show Game</button>
        </div>
    `;
    deailsContainer.innerHTML = card; 
    let btn = document.querySelector("#showbtn")
    btn.addEventListener("click",function(){
        open(gamesData.game_url,"_blank")
    })
}

export function clickToDetailsAction(){
    let items = gamesContainer.querySelectorAll(".col-3"); 
    for(let i=0; i<items.length; i++){
        items[i].addEventListener("click",function(){
            showDetails();
            
            getDetailsByID(this.id).then(function(data){
                fillDetials(data);
            })
        });
    };
};


export function mainFlow(tagName){
    getGamesByTag(tagName).then(function(data){
        fillRows(data); 
    }).then(function(){
        clickToDetailsAction();
    });
}