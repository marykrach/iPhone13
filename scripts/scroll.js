const links = document.querySelectorAll('.header-menu__item a')

seamless.polyfill();

links.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault()

    const id = element.getAttribute('href').substring(1)
    const section = document.getElementById(id)

    if (section) {
      seamless.elementScrollIntoView(section, {
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  })
})

const link_characteristics = document.querySelector('.card-details__link-characteristics')

link_characteristics.addEventListener('click', (event) => {
  event.preventDefault()

  const section = document.getElementById("characteristics")

  seamless.elementScrollIntoView(section, {
    behavior: 'smooth',
    block: 'start'
  });
})
