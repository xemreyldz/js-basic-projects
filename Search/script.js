const inputSearch = document.querySelector("#nptSearch");
const btnSearch = document.querySelector("#btnSearch");
const btnClear = document.querySelector("#btnClear");
const imageList = document.querySelector(".imageList");
const form = document.querySelector("#form");


runEventListeners();

function runEventListeners(){
    form.addEventListener("submit", search);
    btnClear.addEventListener("click", clear);
}
function clear(){
    inputSearch.value="";
    Array.from(imageList.children).forEach((child)=>child.remove());
    
}
function search(e){
    const value = inputSearch.value.trim();
    /** İSTEK ATTIK */
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method :"GET",
        headers:{
            Authorization : "Client-ID rjofGlGDiK5R0wxbDyOx1gT_xM35V74meoJqSVEHZ2Q"
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
          data.results.forEach((image)=>{
            console.log(image.urls.small);
            addImageToUI(image.urls.small);
          })
    })
    .then((err)=>console.log(err));

    e.preventDefault();
}

function addImageToUI(url){

    console.log(imageList)
    const div = document.createElement("div");
    div.className="card";

    const img = document.createElement("img");
    img.setAttribute("src",url);
    img.height='400';
    img.width='400';

    div.append(img);
    imageList.append(div);
}
