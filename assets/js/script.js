const listImg = document.querySelector('#hover-img')
const listBox = document.querySelector('#hover-img-box')

listBox.addEventListener('mousein', () => {
    if (listImg.style.backgroundSize == 'cover') {
        listImg.style.backgroundSize = '120%'
    } else {
        listImg.style.backgroundSize = 'cover'
    }
})