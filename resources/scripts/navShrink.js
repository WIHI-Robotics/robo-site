const navbar = document.querySelector('nav.navbar')
const navLogoImage = document.querySelector('img#logo')
const navMenuButton = document.querySelector('button.navbar-toggler')
const navLinks = document.querySelectorAll('a.nav-link.shrinks')
const colorMenuSVGs = document.querySelectorAll('svg.bi')

navLinks.forEach(link => {
    link.classList.add('fs-5')
})

const shrinkNav = () => {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        navMenuButton.style.transform = "scale(0.8)"
        navLogoImage.width = 50
        if (navbar.classList.contains('py-3')) {
            navbar.classList.remove('py-3')
        }
        navLinks.forEach(link => {
            if (link.classList.contains('fs-5')) {
                link.classList.remove('fs-5')
                link.classList.add('fs-6')
            }
        })
        colorMenuSVGs.forEach(svg => {
            svg.style.transform = "scale(0.8)"
        })
    } else {
        navMenuButton.style.transform = "none"
        navLogoImage.width = 75
        if (!navbar.classList.contains('py-3')) {
            navbar.classList.add('py-3')
        }
        navLinks.forEach(link => {
            if (link.classList.contains('fs-6')) {
                link.classList.remove('fs-6')
                link.classList.add('fs-5')
            }
        })
        colorMenuSVGs.forEach(svg => {
            svg.style.transform = "none"
        })
    }
}

window.onscroll = shrinkNav
