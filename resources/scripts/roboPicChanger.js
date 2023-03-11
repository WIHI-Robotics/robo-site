const roboPic1 = document.querySelector('img.robo-pic#robo-pic-1')
const roboPic2 = document.querySelector('img.robo-pic#robo-pic-2')
const roboPic3 = document.querySelector('img.robo-pic#robo-pic-3')

const setPics = () => {
    if (window.outerWidth <= 720) {
        roboPic1.src = '/robo-site/resources/images/robot/mobile-1.jpg'
        roboPic2.src = '/robo-site/resources/images/robot/mobile-2.jpg'
        roboPic3.src = '/robo-site/resources/images/robot/mobile-3.jpg'
    } else {
        roboPic1.src = '/robo-site/resources/images/robot/1.jpg'
        roboPic2.src = '/robo-site/resources/images/robot/2.jpg'
        roboPic3.src = '/robo-site/resources/images/robot/3.jpg'
    }
}


window.onresize = setPics
window.onload =setPics
