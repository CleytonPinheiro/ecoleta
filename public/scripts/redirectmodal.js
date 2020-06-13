
document.querySelector("select[name=city]")
    .addEventListener("click", redirectSelect)


function redirectSelect(event) {
    console.log(event.target.value)

}

