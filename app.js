// template_uq16k42
// service_i34tg3r   
// l5DuSQ5dzzggBMbnT

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classlist += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_i34tg3r',
            'template_uq16k42',
            event.target,
            'l5DuSQ5dzzggBMbnT'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at msjohnstonkommukuri@gmail.com"
            );
        })
}

// ^^ This is a Promise. 
// I have it all hooked up to EmailJS.

function toggleModal() {
    
}

