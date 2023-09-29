// données d'exemple pour les articles(produits à vendre)
const products = [
    {
        name: "PC",
        price: 1500,
        quantity: 0,
        isliked: false
    },
    {
        name: "ELO",
        price: 5000,
        quantity: 0,
        isliked: false
    },
    {
        name: "smart phone",
        price: 200,
        quantity: 0,
        isliked: false
    }
]
// Slectionnez l'element de panier
const cart=document.getElementById("cart");
// Selectionnez l'element du prix total
const totalPriceElement=document.getElementById("totalPrice");
console.log(totalPriceElement)
// fonction pour afficher les articles dans le Panier
function displaycart() {

    if(cart){
        cart.innerHTML="";

    }
    let totalPrice=0;
products.forEach((element,index)=>{
    const cartProduct=document.createElement("div");
    cartProduct.className="cartProduct";
    cartProduct.innerHTML=`
    <span> ${element.name} </span>
    <span> ${element.price} </span>
    <button onclick="decrement(${index})"> - </button>
    <span> ${element.quantity} </span>
    <button onclick="icrement(${index})"> + </button>
    <button onclick="remove(${index})"> supprimer </button>
    <button  
    class="heartButton  ${element.isliked ?'liked':'' }"
    onclick="liked(${index})"> &#10084 </button
    `;
    cart?.appendChild(cartProduct);
    totalPrice +=element.price * element.quantity
     
})

totalPriceElement.innerHTML = totalPrice ;

}



function icrement (index) {
    products[index].quantity+=1;
displaycart()
}
function decrement(index){
  if(products[index].quantity >0) 
  products[index].quantity-=1 
displaycart()
}



function remove(index ){
delete products[index] ;
displaycart()
}

   function liked (index) {
    products[index].isliked = !(products[index].isliked);
    displaycart()
   } 


   

displaycart()
