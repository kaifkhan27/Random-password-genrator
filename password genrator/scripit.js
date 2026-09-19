let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase= document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genbtn = document.getElementById("genbtn");
let copyicon = document.getElementById("copyicon")

 
slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input', ()=>{
    slidervalue.textContent = inputslider.value
}); 
genbtn.addEventListener('click', ()=>{
    passbox.value = generatePassword(); 
})
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
 let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let allnumbers = "0123456789";
 let allsymbols = "^!?/*@#$%&~"

function generatePassword(){
    let genPassword = "";
 let allChars = "";


 allChars += lowercase.checked ? lowerChars : "";
 allChars += uppercase.checked ? upperChars : "";
 allChars += numbers.checked ? allnumbers : "";
 allChars += symbols.checked ? allsymbols : "";
 
 if(allChars == "" || allChars.length == 0){
    return genPassword;

 }
 let i = 1;
 while(i<=inputslider.value){
     genPassword += allChars.charAt(Math.floor(Math.random()* allChars.length));
     i++;
    }
    return genPassword;
}
copyicon.addEventListener('click', ()=>{
    
navigator.clipboard.writeText(passbox.value)
});
