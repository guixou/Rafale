async function loadElements() {

    const response = await fetch("public/data/data.json")
    const dataObject = await response.json()
    const pictures = dataObject.pictures
    return pictures
};

function displayElements(pictures) {

    const section = document.querySelector(".grid") 
    const template = document.querySelector("#displayElements")

    for (const picture of pictures) {
        const clone = document.importNode(template.content, true)
        
        clone.querySelector(".grid-item").setAttribute("id", "showElement")
        clone.querySelector(".grid-item").setAttribute("data-id", picture.id)
        clone.querySelector(".grid-item").setAttribute("data-desc", picture.description)
        clone.querySelector(".grid-item").setAttribute("data-img", `public/image/${picture.id}.jpg`)

        clone.querySelector(".photo").setAttribute("src", `public/image/${picture.id}.jpg`)
        clone.querySelector(".photo").setAttribute("alt", picture.description)
        section.appendChild(clone)
    }

    const elements = document.querySelectorAll("#showElement");
    
    elements.forEach((element) => {
        element.addEventListener("click", function(){
            const id = element.getAttribute("data-id");
            const desc = element.getAttribute("data-desc");
            const img = `public/image/${id}.jpg`
            show(id, desc, img);
        });
    });
    
};


function show(id, desc, img){
    console.log(id, desc, img)

};

async function init() {
    const pictures = await loadElements()
    displayElements(pictures)
} 


init()
