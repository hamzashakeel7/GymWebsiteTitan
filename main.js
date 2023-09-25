

                        /*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav__menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav__close')


                                /*===== MENU SHOW =====*/

/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


                                /*===== MENU HIDDEN =====*/

/* Validate if constant exists */

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav__menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)



/*=============== Calculate BMI===============*/
const CalculateForm = document.getElementById('calculate__form'),
      CalculateCm = document.getElementById ('calculate-cm'),
      CalculateKg = document.getElementById('calculate-kg'),
      CalculateMessage = document.getElementById('calculate-message')  
    
const CalculateBmi = (e) =>{
    e.preventDefault()

    // Check if these fields have a value
    if (CalculateCm.value === "" || CalculateKg.value === ""){
        CalculateMessage.classList.remove("color-green")
        CalculateMessage.classList.add("color-red")

        CalculateMessage.textContent = "Fill in the height and weight!"

        // Message should remove after 3 seconds
        setTimeout(() =>{
            CalculateMessage.textContent = ''
        },3000)
    } 
    else {
        const cm = CalculateCm.value / 100,
              kg = CalculateKg.value,
              bmi = Math.round(kg / (cm * cm))
              
        if (bmi < 18.5) {
            CalculateMessage.classList.add('color-green')
            CalculateMessage.textContent = `Your Bmi is ${bmi} and you are skinny 😔`
        }   
        else if (bmi < 25) {
            CalculateMessage.classList.add('color-green')
            CalculateMessage.textContent = `Your Bmi is ${bmi} and you are healthy 😍`
        }   
        else {
            CalculateMessage.classList.add('color-green')
            CalculateMessage.textContent = `Your Bmi is ${bmi} and you are overweight 😢`
        }

            // Clear the input field
            CalculateCm.value = ""
            CalculateKg.value = ""

            // remove message after 4 seconds
            setTimeout(() =>{
                CalculateMessage.textContent = ''
            }, 4000)
    }
} 

CalculateForm.addEventListener('submit', CalculateBmi)


// ------------Email Js----------------

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')

const sendEmail = (e)=>{
    e.preventDefault();

    if (contactUser.value === '') {
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')
        contactMessage.textContent = 'You must enter your email'

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 3000)
    } 
    else{
        emailjs.sendForm('service_5lazoiq', 'template_u6i758j', '#contact-form', 'BpGEaEw6ZxhCSQL8e')
            .then(() =>{
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'Regristration Successful 💪'

                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 3000)
            }, (error) =>{
                // mail sending error
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })

            // clear input field 
            contactUser.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)


// Scroll section active link .......


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


// scroll up...

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the 'a' tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// Scroll reveal animation....

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})