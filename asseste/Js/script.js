const faqs = document.querySelectorAll('.faq');

const searchBox = document.querySelector(".search_box");
const searchBtn = document.querySelector(".search_btn");
const closeBtn = document.querySelector(".close_btn");
const search = document.querySelector(".search");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active")
    });
});

searchBtn.addEventListener('click', function(){
    
        search.classList.add("active");
        searchBox.focus();
    
})

closeBtn.addEventListener('click', function() {
    search.classList.remove("active");
    searchBox.value = '';
})

console.log(closeBtn);
