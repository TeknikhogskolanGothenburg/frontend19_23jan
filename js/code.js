document.getElementById("icon")
        .addEventListener("click", changeIcon);
        

function changeIcon(e) {
    let iconImage = document.getElementById("icon");
    if(iconImage.src.includes("on")) {
        iconImage.src = "img/off.png";
    }
    else {
        iconImage.src = "img/on.png";
    }
}
