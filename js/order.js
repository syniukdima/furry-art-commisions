let input = document.getElementById("reference");
let imageName = document.getElementById("image-name");

input.addEventListener("change", ()=>{
    let inputImage = document.querySelector("input[type='file']").files[0];

    imageName.innerText = inputImage.name;
})