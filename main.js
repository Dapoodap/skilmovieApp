//definite the things indeed
let firstContainer = document.getElementById("containerPrimary");
let boxCard = document.getElementById("boxCard")
let form = document.getElementById("form")
let inputSearch = document.getElementById("search")
firstContainer.appendChild(boxCard)
let key_utama = "https://api.themoviedb.org/3/discover/movie?api_key=5e2a26020fb6095804c3de87a000d457&sort_by=popularity.desc&page=1"
let baseline = "https://image.tmdb.org/t/p/original" //buat path
let key_nowP = "https://api.themoviedb.org/3/movie/now_playing?api_key=5e2a26020fb6095804c3de87a000d457&language=en-US&page=1"
let keyRn;



// create elemen and get data section
//get part of data
function getDataSlice(key) {
    keyRn = key
    fetch(key).then((res) => {
        return res.json()
    }).then((res) => {
        let listPilem = res.results
        listPilem.slice(0, 9).map((item) => {
            //create for date release
            const month = new Date(item.release_date)
            const fixedMonth = month.toLocaleString('en-US', { month: 'long' })
            //create elemen
            //col
            let col = document.createElement("div")
            col.className = "col-auto"
            //card
            let card = document.createElement("div")
            card.className = "card"
            card.style.width = "18rem"
            card.style.backgroundColor = "#0f0f0f"
            card.style.border = "none"
            card.style.margin = "10px"
            card.style.cursor = "pointer"
            card.style.overflow = "hidden"
            card.style.background = "linear-gradient(145deg, #0e0e0e, #101010);"
            card.style.boxShadow = "8px 8px 16px #0a0a0a, -8px -8px 16px #141414"
            //img
            let image = document.createElement("img")
            image.className = "card-img-top"
            image.src = baseline + item.poster_path
            image.style.height = "350px"
            image.style.borderRadius = "30px"
            image.alt = item.original_title
            //card-body
            let cardBody = document.createElement("div")
            cardBody.className = "card-body"
            cardBody.style.color = "wheat"
            cardBody.style.zIndex = "1"
            cardBody.style.padding = "20px 8px 5px 8px"

            //cardbody
            let containerBody = document.createElement("div")
            containerBody.className = "container"
            containerBody.style.padding = "0"
            containerBody.style.display = "flex"
            containerBody.style.justifyContent = "space-between"
            //isi judul dll
            let judulContainer = document.createElement("div")
            let judul = document.createElement("p")
            judul.innerText = item.title
            judulContainer.appendChild(judul)
            judul.style.fontSize = "16px"
            judul.style.fontWeight = "600"
            judul.style.width = "200px"
            let rateContainer = document.createElement("div")
            let rate = document.createElement("p")
            rate.innerText = item.vote_average
            rate.style.fontSize = "16px"
            rate.style.fontWeight = "400"
            rateContainer.appendChild(rate)
            let date = document.createElement("p")
            date.innerText = `${fixedMonth} ${month.getDate()}, ${month.getFullYear()}`
            date.style.fontSize = "16px"
            date.style.fontWeight = "200"
            date.style.width = "200px"

            //assign ke html
            boxCard.appendChild(col)
            col.appendChild(card)
            card.appendChild(image)
            card.appendChild(cardBody)
            cardBody.appendChild(containerBody)
            containerBody.appendChild(judulContainer)
            containerBody.appendChild(rateContainer)
            cardBody.appendChild(date)
        })
    })
}
    //get data full
function getDataFull(key) {
    fetch(key).then((res) => {
        return res.json()
    }).then((res) => {
        let listPilem = res.results
        listPilem.map((item) => {

            //for release date
            const month = new Date(item.release_date)
            const fixedMonth = month.toLocaleString('en-US', { month: 'long' })
            //create elemen
            //col
            let col = document.createElement("div")
            col.className = "col-auto"
            //card
            let card = document.createElement("div")
            card.className = "card"
            card.style.width = "18rem"
            card.style.backgroundColor = "#0f0f0f"
            card.style.border = "none"
            card.style.margin = "10px"
            card.style.cursor = "pointer"
            card.style.overflow = "hidden"
            card.style.background = "linear-gradient(145deg, #0e0e0e, #101010);"
            card.style.boxShadow = "8px 8px 16px #0a0a0a, -8px -8px 16px #141414"
            //img
            let image = document.createElement("img")
            image.className = "card-img-top"
            image.src = baseline + item.poster_path
            image.style.height = "350px"
            image.style.borderRadius = "30px"
            image.alt = item.original_title
            //card-body
            let cardBody = document.createElement("div")
            cardBody.className = "card-body"
            cardBody.style.color = "wheat"
            cardBody.style.padding = "20px 8px 5px 8px"

            //isicardbody
            let containerBody = document.createElement("div")
            containerBody.className = "container"
            containerBody.style.padding = "0"
            containerBody.style.display = "flex"
            containerBody.style.justifyContent = "space-between"
            //isi judul dll
            let judulContainer = document.createElement("div")
            let judul = document.createElement("p")
            judul.innerText = item.title
            judulContainer.appendChild(judul)
            judul.style.fontSize = "16px"
            judul.style.fontWeight = "600"
            judul.style.width = "200px"
            let rateContainer = document.createElement("div")
            let rate = document.createElement("p")
            rate.innerText = item.vote_average
            rate.style.fontSize = "16px"
            rate.style.fontWeight = "400"
            rateContainer.appendChild(rate)
            let date = document.createElement("p")
            date.innerText = `${fixedMonth} ${month.getDate()}, ${month.getFullYear()}`
            date.style.fontSize = "16px"
            date.style.fontWeight = "200"
            date.style.width = "200px"

            //assign ke html
            boxCard.appendChild(col)
            col.appendChild(card)
            card.appendChild(image)
            card.appendChild(cardBody)
            cardBody.appendChild(containerBody)
            containerBody.appendChild(judulContainer)
            containerBody.appendChild(rateContainer)
            cardBody.appendChild(date)





        })
    })
}

//onclick functionfor popular movie (popular)
function home() {
    while (boxCard.firstChild) {
        boxCard.removeChild(boxCard.firstChild)
    }
    document.getElementById("indicate").innerText = "Recent popular"
    getDataSlice(key_utama)
}

//onclick function for now playing US movie 
function nowp() {
    while (boxCard.firstChild) {
        boxCard.removeChild(boxCard.firstChild)
    }
    document.getElementById("indicate").innerText = "Now Playing"
    getDataSlice(key_nowP)
}

//function see all
function seeall() {
    while (boxCard.firstChild) {
        boxCard.removeChild(boxCard.firstChild)
    }
    getDataFull(keyRn)

}
//search event
form.addEventListener('submit', (eve) => {
    eve.preventDefault()
    if (inputSearch.value === "") {
        alert("kosong")
    } else {
        while (boxCard.firstChild) {
            boxCard.removeChild(boxCard.firstChild)
        }
        document.getElementById("indicate").innerText = `result for : ${inputSearch.value}`
        let search_key = `https://api.themoviedb.org/3/search/movie?api_key=5e2a26020fb6095804c3de87a000d457&query=${inputSearch.value}&page=1`
        getDataSlice(search_key)
        inputSearch.value = ""
    }
})


//first approach
getDataSlice(key_utama)

