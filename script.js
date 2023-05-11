const button = document.querySelector(".btn");
const closeIcon = document.querySelector(".icon");
const vikingMovie = document.querySelector(".viking-movie");
const video = document.querySelector("video");

button.addEventListener("click", ()=>{
    vikingMovie.classList.remove("visibility");
})

closeIcon.addEventListener("click", ()=>{
    vikingMovie.classList.add("visibility");
    
     // stop video when closeIcon is clicked
    video.pause();
    video.currentTime = 0;
})