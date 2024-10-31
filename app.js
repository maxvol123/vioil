document.querySelectorAll(".info__buttonside__button").forEach(element=>{
    element.addEventListener("click", btn)
})
function btn() {
    let old_button = document.querySelector(".active__btn")
    old_button.classList.remove("active__btn")
    document.querySelector(".active").classList.remove("active")
    this.classList.add("active__btn")
    for (let index = 0; index < 6; index++) {
        if (document.querySelectorAll(".info__buttonside__button")[index].classList.contains("active__btn")) {
            document.querySelectorAll(".info__textside")[index].classList.add("active")
        }  
    }
}
document.querySelector("#info").onchange=select
function select() {
    document.querySelector(".active").classList.remove("active")
    let select = document.querySelector("#info")    
    document.querySelectorAll(".info__textside")[select.value-1].classList.add("active")
}


const checkbox = document.getElementById("check");
const toggleElement1 = document.querySelector(".header__nav");
const toggleElement2 = document.querySelector(".header__logo");

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        toggleElement1.style.display = "block";
        toggleElement2.style.display = "block";
    } else {
        toggleElement1.style.display = "none";
        toggleElement2.style.display = "none";
    }
});
