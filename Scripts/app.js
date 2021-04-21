const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ]

function cartItemTemplate(album) {
    let filename = album.name.split(" ").join("")
    return `<div class="cart-row">
                <span><img class="shop-item-image" src="Images/${filename}.png" alt="${album.name} Image"></span>
                <span>${album.name}</span>
                <span>${album.price}</span>
            </div>`
}

const imgElements = document.querySelectorAll('.shop-item-image')
const imgElementsList = Array.from(imgElements)
imgElementsList.forEach(imgElement => {
    imgElement.src = `Images/${imgElement.id}.png`
 
})

const shopItemsElement = document.querySelector('.shop-items')
shopItemsElement.addEventListener('click', addToCart, true)

function addToCart(ev) {

    if (ev.target.tagName === 'IMG') {

        let imgElementID = ev.target.id
        let albumName = imgElementID.slice(0, imgElementID.length-1) + " " + imgElementID.slice(imgElementID.length-1, imgElementID.length)
        
        for (item of albums) {
            
            if(item.name === albumName) {
                let album = item
                console.log(album)
                if (album.inCart === false) {
                    item.inCart = true
                    const cartElement = document.querySelector('.cart')
                    cartElement.insertAdjacentHTML('beforeend', cartItemTemplate(album))
                 } else {
                     alert("The item is already in cart.")
                 }

            }
        }
    }
}