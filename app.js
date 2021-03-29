const toggleBtn = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggleBtn.addEventListener("click", ()=> {
    toggleBtn.classList.toggle("active")
    navigation.classList.toggle("active")
})