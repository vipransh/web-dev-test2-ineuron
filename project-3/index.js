
let productDiv=document.getElementById("productDiv");

function fetchProducts(){
  loadProducts(true);
  let result
  fetch('https://dummyjson.com/products')
  .then(async(res)=>{
    result=await res.json();
    // console.log(result);
    loadProducts(false,result.products);
  })
  .catch((e)=>{
    console.log(e);
  })
}


function loadProducts(loading,products){
    if(loading){
      let html=""
        for(let i=0;i<8;i++){
           html+=`<div class="w-1/5 flex flex-col gap-2 p-1 shadow-xl">
           <div class="w-full h-36 bg-gray-300 animate-pulse"></div>
           <div class="bg-gray-300 w-32 h-4 animate-pulse"></div>
           <div class="bg-gray-300 w-24 h-4 animate-pulse"></div>
        </div>`
        }
        productDiv.innerHTML=html;
    }
    else{
        let html=""
        products.forEach((data,index)=>{
            html+=` <div class="w-1/5 flex flex-col gap-2  p-1 rounded-lg shadow-xl">
            <img class="w-full h-40" src="${data.thumbnail}"/>
            <h1>${data.title}</h1>
            <p>${data.price}</p>
         </div>`
        })
        productDiv.innerHTML=html;
    }

}

fetchProducts();