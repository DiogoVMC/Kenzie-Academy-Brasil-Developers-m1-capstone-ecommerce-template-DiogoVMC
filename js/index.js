
const vitrine= document.querySelector(".vitrine")
const productList =document.createElement("ul")
productList.setAttribute("class", "containerCard")
vitrine.appendChild(productList)
let quantidade=0

function sendProducts(list){
for (i=0; i<list.length; i++){
    produto=list[i];
    let produtosFinais = cartCreator(produto)
    }
}

function cartCreator(produto){

    let productCard = document.createElement("li")
    productCard.setAttribute("class", "productCard")
    productCard.setAttribute("id",`cd_${produto.id}`)
    
    let form = document.createElement("form")
    let prodImage= document.createElement("div")
    prodImage.setAttribute("class","prodImage")
    let prodDetails=document.createElement("div")
    prodDetails.setAttribute("class","prodDetails")
    
    
    let productimage = document.createElement("img")
    productimage.setAttribute("class", "productImg");

    let productTag = document.createElement("span")
    productTag.setAttribute("class", "productTag");
    
    let productName= document.createElement("h4")
    productName.setAttribute("class", "productName");

    let productDescription= document.createElement("p")
    productDescription.setAttribute("class", "productDescription");
    
    let productPrice = document.createElement("p")
    productPrice.setAttribute("class", "price");

    let addCart = document.createElement("input")
    addCart.setAttribute("type", "button")
    addCart.setAttribute("value", "Adicionar ao Carrinho")
    addCart.setAttribute("class", "addCart")
    addCart.setAttribute("id",`${produto.id}`)
    
    
    productimage.src=`${produto.img}`
    productTag.innerText = `${produto.tag}`
    productName.innerText = `${produto.nameItem}`
    productDescription.innerText=`${produto.description}`
    productPrice.innerText = `R$ ${(produto.value).toFixed(2)}`
    form.appendChild(addCart)

    prodImage.append(productimage)
    prodDetails.append(productTag, productName, productDescription, productPrice, addCart, form)
    productCard.appendChild(prodImage)
    productCard.appendChild(prodDetails)
    productList.appendChild(productCard)
    
}

sendProducts(data)

const cartButton =document.querySelectorAll(".addCart")
let cont = 0
let valueTotal = 0
for(i=0; i<cartButton.length; i++){
   
    let button= cartButton[i];
   
    button.addEventListener("click", function(e){
        let idProduct = parseInt(e.target.id);
        let produto= searchProduct(idProduct);
        valueTotal += produto.value ;
        cont ++;

        cartList(produto);
        valorCompra(valueTotal, cont);
    })
}

function searchProduct(id){
    for(i=0; i<data.length; i++){
        let produto = data[i];
        if(produto.id == id){
            return produto
        }
    }
}
let cartCotainer = document.querySelector(".productList");
let cartProducts = document.createElement("ul");
cartProducts.setAttribute("class", "cartProducts")
cartCotainer.appendChild(cartProducts)


function cartList(produto){
    let cartProduct = document.createElement("li")
    cartProduct.setAttribute("class", "cartProduct")
    let cartImage= document.createElement("div")
    cartImage.setAttribute("class","cartImage")
    let cartDetails=document.createElement("div")
    cartDetails.setAttribute("class","cartDetails")

    

    let img = document.createElement("img");
    img.setAttribute("class", "imgCart")

    let name = document.createElement("h4");
    name.setAttribute("class","nameCart")

    let price = document.createElement("p")
    price.setAttribute("class", "priceCart")
    
    let removeButton= document.createElement("input")
    removeButton.setAttribute("type", "button")
    removeButton.setAttribute("value", "Remover produto")
    removeButton.setAttribute("class", "removeButton")
    removeButton.setAttribute("id",`${produto.id}`)

    let quantidade=document.createElement("p")
    quantidade.setAttribute("class","quantidade")

    let total =document.createElement("p")
    total.setAttribute("class","total")

    cartProduct.id= "c_" + produto.id;
    img.src=produto.img;
    name.innerText=`${produto.nameItem}`;
    price.innerText=`R$ ${(produto.value).toFixed(2)}`;
  

    removeButton.addEventListener("click", function(e){
        let li = document.querySelector("#c_"+ produto.id)
        cont --
        value = produto.value
        valueTotal -= value
     
        document.querySelector(".value").innerText = `R$ ${(valueTotal).toFixed(2)}`
        document.querySelector(".quantity").innerText = `${cont}`
        li.remove()
    })

    cartImage.append(img)
    cartDetails.append(name, price, removeButton)
    cartProduct.appendChild(cartImage)
    cartProduct.appendChild(cartDetails)
    cartProducts.appendChild(cartProduct)
}


function valorCompra(value,quantity){
const quantityTitle=document.querySelector(".quantityTitle");
const valueTitle=document.querySelector(".valueTitle");
const valueTotal = document.querySelector(".value");
const quantityTotal = document.querySelector(".quantity")



quantityTitle.innerText=`Quantidade:`
valueTitle.innerText=`Valor Total:`
valueTotal.innerText=`R$ ${(value).toFixed(2)}`
quantityTotal.innerText=`${quantity}`
}