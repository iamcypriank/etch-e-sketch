let rootEl = document.querySelector(".root")


//essentials
let colors = ["black","red","green","blue","white"] ///colors
let resetBtn = document.querySelector("#reset") // reset button
let savebtn = document.querySelector("#save") // save button element 
let chanegPixelSizeBtn = document.querySelector("#changegirdsize")  //grid change button
let pixels = [] // varible to store all the current grid pixels


//give color to all the color button
function initColorButton(){
    let buttons = document.querySelectorAll(".color")
    let i=0
    buttons.forEach(function(button){
        button.style.backgroundColor=`${colors[i]}`
        i++;
    })

    let btn = document.querySelector(".color")
    btn.style.height="32px";
    btn.style.width="80px";
}


//creates a fresh art-board
function createBoard(size=16,color){ 
    for(let i=0;i<size*size;i++){
        let pixel = document.createElement("div")
        pixel.style.height=`${600/size}px`
        pixel.style.width=`${600/size}px`
        pixel.style.backgroundColor="white"
        pixel.classList.add("pixel")
        document.querySelector(".art-board").appendChild(pixel)
    }
    pixels = document.querySelectorAll(".pixel")
    draw(color)
}


//deletes current art-board
function deleteBoard(){
    let pixels = document.querySelectorAll(".pixel")
    pixels.forEach(function(pixel){
        document.querySelector(".art-board").removeChild(pixel)
    })
}
//callings once to init
initColorButton()
createBoard(16,colors[0])


//changes pixel size
chanegPixelSizeBtn.addEventListener("click", function(e) {
    let userSize = prompt("Enter grid size (e.g., 16 for 16x16). Min: 16, Max: 100");
    let size = Number(userSize);

    if (isNaN(size)) {
        alert("Please enter a valid number!");
    } else {
        if (size >= 16 && size <= 250) {
            resetBtn.click();
            deleteBoard();
            createBoard(size,colors[0]);
        } else {
            alert("Please enter a size between 16 and 100!");
        }
    }
});


//resets art-board
resetBtn.addEventListener("click",function(e){
    pixels.forEach(function(pixel){
            pixel.style.backgroundColor="white"
    })

})



//saves image
savebtn.addEventListener("click",function(e){
    html2canvas(document.querySelector(".art-board")).then(canvas => {
        const link = document.createElement("a");
        link.download = "screenshot.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
})


//draws on art-board
function draw(color){
    pixels.forEach(function(pixel){
        pixel.addEventListener("mouseover",function(e){
            pixel.style.backgroundColor=`${color}`
        })
    })
}

function selectColor(){

}

document.querySelectorAll(".color").forEach(function(button){
    button.addEventListener("click",function(e){

        document.querySelectorAll(".color").forEach(function(btn){
            btn.style.height = "30px"; 
            btn.style.width = "30px"; 
        });
        draw(colors[this.value])
        this.style.height="32px"
        this.style.width="80px"
    })
})