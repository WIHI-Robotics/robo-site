const navbar = document.querySelector('nav.navbar')
const navLogoImage = document.querySelector('img#logo')
const navLinks = document.querySelectorAll('a.nav-link')

navLinks.forEach(link => {
    link.classList.add('fs-5')
})

const shrinkNav = () => {
    if (document.body.scrollTop > 99 || document.documentElement.scrollTop > 99) {
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
        navLogoImage.width = 70
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
