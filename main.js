let $ = document
let percent = $.querySelector(".percent")
let liters = $.getElementById("liters")
let remaining = $.querySelector(".remaining")
let textSmall = $.querySelector(".text-small")
let mugs = $.querySelectorAll(".mug-small")

mugs.forEach((mug, idx) => {
    mug.addEventListener("click", () => fullCup(idx))
})
function fullCup(idx) {
    mugs.forEach((mug, idx2) => {
        if (mugs[idx].classList.contains("full") && !mugs[idx].nextElementSibling.classList.contains("full")) {
            idx = 0
        }
        if (idx >= idx2) {
            mug.classList.add("full")
        } else {
            mug.classList.remove("full")
        }
    })
    updateBigMug()
}

function updateBigMug() {
    let fullMug = $.querySelectorAll(".mug-small.full").length
    let totalMugs = mugs.length
    if (fullMug === 0) {
        percent.style.visibility = "hidden"
        percent.style.height = 0
    } else {
        percent.style.visibility = "visible"
        percent.style.height = `${fullMug / totalMugs * 330}px`
        percent.innerHTML = Math.ceil(fullMug/totalMugs * 100) + "%"
    }
    if (fullMug === totalMugs) {
        remaining.style.visibility = "hidden"
        remaining.style.height = 0
    } else {
        remaining.style.visibility = "visible"
        liters.innerHTML = `${3 - (250 * fullMug / 1000)}L`
    }
    if (fullMug === 11) {
        liters.style.fontSize = ".7rem"
        textSmall.style.fontSize = ".7rem"
    } else {
        liters.style.fontSize = "20px"
    }
}