
let inputBox=document.getElementById("input");
let btn=document.getElementById("submit");
let textDiv=document.getElementById("textDiv");

btn.addEventListener("click",()=>{
    if(inputBox.value!==""){
        let text=document.createElement("h1")
        text.innerText=inputBox.value;
        textDiv.append(text);
        inputBox.value=""
    }
})


