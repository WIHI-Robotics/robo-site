const navbar = document.querySelector('nav.navbar')
const navLogoImage = document.querySelector('img#logo')
const navMenuButton = document.querySelector('button.navbar-toggler')
const navLinks = document.querySelectorAll('a.nav-link')

navLinks.forEach(link => {
    link.classList.add('fs-5')
})

const shrinkNav = () => {
    if (document.body.scrollTop > 99 || document.documentElement.scrollTop > 99) {
        navMenuButton.style.transform = "scale(0.667)"
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
    }
}

window.onscroll = shrinkNav
