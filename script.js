const form = document.getElementById('form');
const inputName = document.getElementById('name');
const email = document.getElementById('email');
const comm = document.getElementById('comments');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const inputNameValue = inputName.value.trim();
    const emailValue = email.value.trim();
    const commValue = comm.value.trim();

    if(inputNameValue === '') {
        setError(inputName, 'The Name must be at least 2 character');
    } else {
        setSuccess(inputName);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(commValue.length < 10) {
        setError(comm, 'The Comment must be between 10-400 characters long');
    } else {
        setSuccess(comm);
    }



};





// ===================== Scroll Reveal ===================== 


// Initialize ScrollReveal - with motion 
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200
});

// Apply reveal animation to the .formTitle element
ScrollReveal().reveal(".formTitle", { origin: "top" });
ScrollReveal().reveal(".sendBtn", { origin: "bottom" });


// Initialize ScrollReveal - with NO motion 
// 
ScrollReveal({
  distance: "0px",
  duration: 1500,
  delay: 100
});

// Apply reveal animation to the .formTitle element
ScrollReveal().reveal(".inputs");










// $(document).ready(function() {
//   $('.form').submit(function(event) {
//       event.preventDefault(); // Prevent the form from submitting normally

//       // Get the value of the name input field
//       var nameValue = $('#name').val();

//       // Check if the length of the name is less than 2
//       if (nameValue.length < 2) {
//           // If the length is less than 2, append .css_visible class to js_name
//           $('.js_name').addClass('css_visible');
//       } else {
//           // If the length is 2 or more, remove .css_visible class from js_name
//           $('.js_name').removeClass('css_visible');
//       }

//       // Here you can continue with your form submission logic if needed
//       // For now, let's just log a message
//       console.log('Form submitted');
//   });
// });



// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// const form = document.getElementById('contactForm');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     validateForm();
// });

// function validateForm() {
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const comments = document.getElementById('comments').value.trim();
//     const nameError = document.getElementById('nameError');
//     const emailError = document.getElementById('emailError');
//     const commentsError = document.getElementById('commentsError');

//     // Name validation
//     if (name === '') {
//         nameError.textContent = 'Name is required';
//     } else {
//         nameError.textContent = '';
//     }

//     // Email validation
//     if (!isValidEmail(email)) {
//         emailError.textContent = 'Invalid email address';
//     } else {
//         emailError.textContent = '';
//     }

//     // Comments validation
//     if (comments.length < 10) {
//         commentsError.textContent = 'Comments must be at least 10 characters long';
//     } else if (comments.length > 400) {
//         commentsError.textContent = 'Comments cannot exceed 400 characters';
//     } else {
//         commentsError.textContent = '';
//     }
// }

// function isValidEmail(email) {
//     const re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }

// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
