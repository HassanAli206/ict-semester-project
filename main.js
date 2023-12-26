window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        const icon=faq.querySelector('.faq_icon i');
        if(icon.className==='fa-solid fa-plus'){
            icon.className="fa-solid fa-minus";
        }else{
            icon.className="fa-solid fa-plus";
        }
    })
})




const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display= "none";
})


const closeNav=() =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display= "inline-block";
}
closeBtn.addEventListener('click', closeNav)




document.addEventListener('DOMContentLoaded', function() {
    const acceptButton = document.querySelector('.btn-acpt');
    const rejectButton = document.querySelector('.btn-reject');

    
    function handleAccept() {
        alert('You have accepted the terms.');
        window.location.href = 'index.html'; 
    }


    function handleReject() {
        alert('You have declined the terms.');
        window.location.href = 'index.html'; 
        }

    
    acceptButton.addEventListener('click', handleAccept);
    rejectButton.addEventListener('click', handleReject);
});




document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();


        const username = form.elements['username'].value.trim();
        const email = form.elements['email'].value.trim();
        const password = form.elements['password'].value.trim();
        const confirm_password = form.elements['confirm_password'].value.trim();

        if (!username || !email || !password || !confirm_password) {
            alert('Please fill in all fields.');
            return; 
        }

       
        if (password !== confirm_password) {
            alert('Passwords do not match.');
            return; 
        }

       
        alert('Sign up successful!');

       
        window.location.href = 'index.html';
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        alert('Login successful!');

        window.location.href = 'index.html';
    });

    const forgetPasswordLink = document.querySelector('.FORGOT-SECTION h4');
    
    forgetPasswordLink.addEventListener('click', function (event) {
        event.preventDefault(); 

       
        alert('Action not available.');
    });
});
