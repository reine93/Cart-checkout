
const crtbutton = document.getElementById("cartbtn");
function togCart() {
let cart = document.getElementById("cart-container");
if (cart.style.display == "none"){
         return cart.style.display = "block"} 
         else {
         return cart.style.display = "none"
         }
};
crtbutton.addEventListener("click", function () { 
        togCart(); 
         });