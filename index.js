const bees = document.getElementsByClassName('bees')[0]
const frog = document.querySelector('.frog')

for (let i = 0; i < 10000; i++) {
    img = document.createElement('img')
    img.src = 'Fly_feature.png'
    img.className = 'bee'
    bees.appendChild(img)
}

const blow = () => {
    bees.classList.add('run')
    setTimeout(()=>frog.classList.add('goga'), 1000)
}