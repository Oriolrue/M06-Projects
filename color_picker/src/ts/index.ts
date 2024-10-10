let changeColors: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");
for (let i = 0; i < changeColors.length; i++) {
    changeColors[i].addEventListener("click", () =>{
        document.body.style.backgroundColor = changeColors[i].id;
    });
       
}