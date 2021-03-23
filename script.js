function initTabNav() {

  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')
  tabContent[0].classList.add('active')

  if(tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach( (section) => {
        section.classList.remove('active')
      })

      tabContent[index].classList.add('active')
    }

    tabMenu.forEach( (itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      })
    });
  }
}
initTabNav();


// Efeito Accordion #Faq
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')
  const activeClass = 'actived';
  if(accordionList.length) { // se existir na pagina executar
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion() {
      this.classList.toggle(activeClass) // ativa dt
      this.nextElementSibling.classList.toggle(activeClass) //ativa dd
    }

    accordionList.forEach( (item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}

initAccordion();


// Scroll Suave #Menu
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    // Forma alternativa de fazer scroll suave
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // })

  }

  linksInternos.forEach( (link) => {
    link.addEventListener('click', scrollToSection)
  })
}

initScrollSuave();


// Scroll nas sections
function initAnimationScroll() {

  const sections = document.querySelectorAll('.js-scroll')

    if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach( (section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible) {
          section.classList.add('active')
        } else {
          section.classList.remove('active')
        }
      }) 
      
    }

    animaScroll()

    window.addEventListener('scroll', animaScroll)

  }
  
}

initAnimationScroll()