const API_URL='https://api.themoviedb.org/3/movie/550?api_key=22fc0233b582865306d2d5fd6b2578bd'
const IMG_PATH ='http://image.tmdb.org/t/p/'
const SEARCH_API ='https://api.themoviedb.org/3/search/movie?api_key=22fc0233b582865306d2d5fd6b2578bd&language=en-US&page=1&include_adult=false'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

getMovies(API_URL)

async function getMovies(url){
    const res= await fetch(url)
    const data= await res.json()

    console.log(data)
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})