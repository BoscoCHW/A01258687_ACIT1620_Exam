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
    imgElement.addEventListener('click', addToCart)
})

function addToCart(ev) {
    let imgElementID = ev.target.id
    let cartElement = document.querySelector('.cart')
    let albumName = imgElementID.slice(0, imgElementID.length-1) + " " + imgElementID.slice(imgElementID.length-1, imgElementID.length)
    let album = albums.find(item => item.name === albumName)
    cartElement.insertAdjacentHTML('beforeend', cartItemTemplate(album))
}