let circle = document.querySelector(".card__flavours-option");

circle.addEventListener("click", (e)=>{

  let target = e.target;
  if(target.classList.contains("circle")){
    //For Circles
    circle.querySelector(".active").classList.remove("active");
    target.classList.add("active");

    //For Image
    document.querySelector(".card__images .active").classList.remove("active");
    document.querySelector(`.card__images .${target.id}`).classList.add("active");

    //For Image Background
    document.querySelector(".card__image-bg .active").classList.remove("active");
    document.querySelector(`.card__image-bg .${target.id}`).classList.add("active");

    //For Buttons
    document.querySelector(".card__buttons .active").classList.remove("active");
    document.querySelector(`.card__buttons .${target.id}`).classList.add("active");

    //For Description
    document.querySelector(".card__description .active").classList.remove("active");
    document.querySelector(`.card__description .${target.id}`).classList.add("active");

  }

});