const Singledigit = document.getElementById("Single-digit");
const Twodigit = document.getElementById("Two-digit");
const Threedigit = document.getElementById("Three-digit");


document.querySelectorAll(".label-1").forEach(label => {
    label.addEventListener("click", () => {
            if(Singledigit.checked){
                console.log("1");
            }
            else if(Twodigit.checked){
                console.log("2");
            }
            else if(Threedigit.checked){
                console.log("3");
            }
            else{
                console.log("0");
            }
    })
}
)
