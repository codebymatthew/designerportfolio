// WORK NAV
const allBtn = document.querySelector('.workNavAll')
const brandingBtn = document.querySelector('.workNavBranding')
const webDesignBtn = document.querySelector('.workNavWebDesign')
const printBtn = document.querySelector('.workNavPrint')
const work = document.querySelector('.workImages')

const allImages = document.querySelectorAll('.allImg')
const brandingImages = document.querySelectorAll('.branding')
const webDesignImages = document.querySelectorAll('.webDesign')
const printImages = document.querySelectorAll('.print')
const workLinks = document.querySelectorAll('.workLinks')

allBtn.addEventListener('click', allWork) 
brandingBtn.addEventListener('click', brandingWork) 
webDesignBtn.addEventListener('click', webDesignWork)
printBtn.addEventListener('click', printWork)

function allWork() {
    Array.from(allImages).forEach(element => element.classList.remove('hidden'))
    allBtn.style.color = '#EF4511'
    brandingBtn.style.color = 'black'
    webDesignBtn.style.color = 'black'
    printBtn.style.color = 'black'
    work.style.marginBottom = '0'
}


function brandingWork() {
    Array.from(brandingImages).forEach(element => element.classList.remove('hidden'))
    Array.from(webDesignImages).forEach(element => element.classList.add('hidden'))
    Array.from(printImages).forEach(element => element.classList.add('hidden'))
    brandingBtn.style.color = '#EF4511'
    allBtn.style.color = 'black'
    webDesignBtn.style.color = 'black'
    printBtn.style.color = 'black'
    work.style.marginBottom = '30rem'
}

function webDesignWork() {
    Array.from(webDesignImages).forEach(element => element.classList.remove('hidden'))
    Array.from(brandingImages).forEach(element => element.classList.add('hidden'))
    Array.from(printImages).forEach(element => element.classList.add('hidden'))
    webDesignBtn.style.color = '#EF4511'
    allBtn.style.color = 'black'
    brandingBtn.style.color = 'black'
    printBtn.style.color = 'black'
    work.style.marginBottom = '30rem'
}
function printWork() {
    Array.from(printImages).forEach(element => element.classList.remove('hidden'))
    Array.from(webDesignImages).forEach(element => element.classList.add('hidden'))
    Array.from(brandingImages).forEach(element => element.classList.add('hidden'))
    printBtn.style.color = '#EF4511'
    allBtn.style.color = 'black'
    brandingBtn.style.color = 'black'
    webDesignBtn.style.color = 'black'
    work.style.marginBottom = '30rem'
}
allWork()
// when I click a link it needs to turn orange and turn or keep the other links black
// also when I click a link I want the corresponding images to stay while the other images disappear 

// Modal Stuffs

const modalOpenBtn = document.querySelector('.faNav')
const modalCloseBtn = document.querySelector('.modalCloseBtn')
const modal = document.querySelector('.modal')
const workBtn = document.querySelector('#workBtn')
const aboutBtn = document.querySelector('#aboutBtn')
const contactBtn = document.querySelector('#contactBtn')

modalCloseBtn.addEventListener('click', toggleModal)
modalOpenBtn.addEventListener('click', toggleModal)
workBtn.addEventListener('click', toggleModal)
aboutBtn.addEventListener('click', toggleModal)
contactBtn.addEventListener('click', toggleModal)


function toggleModal() {
    modal.classList.toggle('showModal')
}

function windowToggle(event) {
    if(event.target === modal) {
        toggleModal()
    }
}

