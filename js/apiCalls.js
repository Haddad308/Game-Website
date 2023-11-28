export async function getGamesByTag(tag){
    // console.log("hello from api call: ",tag);
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${tag}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4ef3d91df9msh34915522b283539p175910jsn0afe4cce2b0d',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        loading.classList.add("d-none")
        // console.log(result);
        return result ; 
    } catch (error) {
        loading.classList.add("d-none")
        console.error(error);
    }
}


export async function getDetailsByID(id){
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4ef3d91df9msh34915522b283539p175910jsn0afe4cce2b0d',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        loading.classList.add("d-none")
        return result;
    } catch (error) {
        loading.classList.add("d-none")
        console.error(error);
    }
}


