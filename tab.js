window.addEventListener("DOMContentLoaded", function() {
    let tab = document.querySelectorAll(".info-header-tab") ,
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent")    
    info.addEventListener("click", function(event){
        let target = event.target
        if(target && target.classList.contains("info-header-tab")) {
            let curTab = target.dataset.tab
            console.log(curTab)
            tabContent.forEach(function(item) {
                if(item.hasAttribute(`data-${curTab}`)) {
                    item.classList.add("show")
                    item.classList.remove("hide")
                } else {
                    item.classList.add("hide")
                    item.classList.remove("show")
                }
            })
        }
    })
})
