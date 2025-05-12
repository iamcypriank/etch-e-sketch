let rootEl = document.querySelector(".root")


let resetBtn = document.querySelector("#reset")
let savebtn = document.querySelector("#save")
let chanegPixelSizeBtn = document.querySelector("#changegirdsize") 
let size=16 //default size 16x16

chanegPixelSizeBtn.addEventListener("click",function(e){
    let userSize = prompt("enter grid size example : 16(16x16) min:16x16 max:100x100")
    console.log(userSize)
    if(isNaN(userSize)){
        alert("please enter valid input!")
    }else{
        if(userSize>=16 && userSize<=100){
            size=userSize
        }else{
            alert("please enter valid input!")
        }
    }
    
    createBoard(size)

})


function createBoard(size){ 
    for(let i=0;i<size*size;i++){
        let pixel = document.createElement("div")
        pixel.style.height=`${600/size}px`
        pixel.style.width=`${600/size}px`
        pixel.style.backgroundColor="white"
        pixel.classList.add("pixel")
        document.querySelector(".art-board").appendChild(pixel)
    }
}
createBoard(size)

//actual 
let pixels = document.querySelectorAll(".pixel")
let color = "black"



resetBtn.addEventListener("click",function(e){
    pixels.forEach(function(pixel){
            pixel.style.backgroundColor="white"
        
    })

})

savebtn.addEventListener("click",function(e){
    html2canvas(document.querySelector(".art-board")).then(canvas => {
        const link = document.createElement("a");
        link.download = "screenshot.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
})

pixels.forEach(function(pixel){`${color}`
    pixel.addEventListener("mouseenter",function changeColor(e){
        pixel.style.backgroundColor=`${color}`
    })
})