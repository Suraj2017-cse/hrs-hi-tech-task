const form = document.querySelector('.formClick');
// let nameEl = document.getElementById('name');
// let emailEl = document.getElementById('email');
// let phoneEl = document.getElementById('phone');
// let msg = document.getElementById('message');



// Add an event listener for form submission
form.addEventListener("submit", (e) => {
  // Prevent the default form submission
  e.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  let nameEl = document.getElementById('name').value.trim();
  let emailEl = document.getElementById('email').value.trim();
  let phoneEl = document.getElementById('phone').value.trim();
  let msg = document.getElementById('message').value.trim();

  const pattern = /^[6789][0-9]{9}$/;
  const emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;



  // Validate name
  if (nameEl == "") {
    document.getElementById("name").classList.add("is-invalid");
    return false;
  } else {
    document.getElementById("name").classList.remove("is-invalid");
  }

  // Validate email
  if (!emailValid.test(emailEl)) {
    document.getElementById("email").classList.add("is-invalid");
    return false;
  } else {
    document.getElementById("email").classList.remove("is-invalid");
  }

  // Validate phone
  if (!pattern.test(phoneEl)) {
    document.getElementById("phone").classList.add("is-invalid");
    return false;
  } else {
    document.getElementById("phone").classList.remove("is-invalid");
  }

  // Validate message
  if (msg == "") {
    document.getElementById("message").classList.add("is-invalid");
    return false;
  } else {
    document.getElementById("message").classList.remove("is-invalid");
  }


  // Display an alert if the validation is successful
  alert('Form Submited successful!');

  form.reset();
})

 