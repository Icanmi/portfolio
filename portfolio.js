const hamburg = document.querySelector('.hamburg');
const navLinks = document.querySelector('.nav-link');
const navLinkItems = document.querySelectorAll('.nav-link a');
//======Toggle MEnu on hamburger====//
hamburg.addEventListener('click', function(){
    navLinks.classList.toggle('active');
    hamburg.classList.toggle('open');
});

//========Auto close menu when a link is clicked====//
navLinkItems.forEach(function(link){
    link.addEventListener('click', function(){
    navLinks.classList.remove('active');
    hamburg.classList.remove('open');
    });
});

//=====Close menu when clicking outside===//
document.addEventListener('click',function(event){
    const isClickInsideNav =navLinks.contains(event.target);
    const isClickOnHamburger =hamburg.contains(event.target);

    if (!isClickInsideNav && !isClickOnHamburger){
        navLinks.classList.remove('active');
        hamburg.classList.remove('open');
    }
})
//=======Form validation=========//
const contactForm =document.querySelector('.contact-form');
const nameInput =document.querySelector('#name');
const emailInput =document.querySelector('#email');
const messageInput =document.querySelector('#message');
console.log(document.querySelector('.contact-form'));

contactForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    let isValid = true;

    //=========VALIDATE NAME====//
    const nameError = document.querySelector('#name-error');
    if (nameInput.value.trim()===""){
        nameError.textContent=  'Name is required';
        isValid = false;
    }else {
        nameError.textContent ='';
    }

     //=========VALIDATE Email====//
    const emailError = document.querySelector('#email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim()===""){
        emailError.textContent=  'Email is required';
        isValid = false;
    }else if (!emailPattern.test(emailInput.value.trim())){
        emailError.textContent=  'Please enter a valid email';
        isValid = false;
    }else {
        emailError.textContent ='';
    }

    //=========VALIDATE Message====//
    const messageError = document.querySelector('#message-error');
    if (messageInput.value.trim()===""){
        messageError.textContent=  'Message is required';
        isValid = false;
    }else {
        messageError.textContent ='';
    }
    //=======If everything is valid======//
    if(isValid){
        HTMLFormElement.prototype.submit.call(contactForm);
    }
});