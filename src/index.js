console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(imgUrl)
    .then((r) => r.json())
    .then((imgs) => addImages(imgs.message))
    fetch(breedUrl)
    .then((r) => r.json())
    .then((breeds) => addBreeds(breeds.message))
    breedDropdown = document.getElementById("breed-dropdown")
    for(const letter of "abcdefghijklmnopqrstuvwxyz"){
        let option = document.createElement("option")
        option.textContent = letter
        option.value = letter
        breedDropdown.appendChild(option)
    }
    breedDropdown.addEventListener("change", (e) => {
        let breeds = document.querySelectorAll("ul#dog-breeds li")
        breeds.forEach((breedLI) => {
            if(breedLI.className !== e.target.value){
                breedLI.style.display = "none"
            }
            else{
                breedLI.style.display = ""
            }
        })
    })
}) 

function addImages(imgs){
    imgs.forEach(image => {
        let img = document.createElement("img")
        img.src = image
        document.getElementById("dog-image-container").appendChild(img)
    });
}

function addBreeds(breeds){
    const ul = document.getElementById("dog-breeds")
    for(const breed in breeds) {
        if (breeds[breed].length === 0){
            createBreedLI(ul, breed)
        }
        else{
            breeds[breed].forEach(b => {
                createBreedLI(ul, `${b} ${breed}`)
            })
        }
    }
}

function createBreedLI(ul, breed){
    let li = document.createElement("li")
    li.textContent = breed
    li.className = breed[0]
    li.addEventListener("click", (e) => {
        li.style.color = "green"
    })
    ul.appendChild(li)
}