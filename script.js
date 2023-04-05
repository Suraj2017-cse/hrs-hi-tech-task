const form = document.querySelector('.formClick');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nameEl = document.getElementById('name').value;
    let emailEl = document.getElementById('email').value;
    let phoneEl = document.getElementById('phone').value;
    let msg = document.getElementById('message').value;
    
    const pattern = /^[6789][0-9]{9}$/;
    const emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  

    // Validate name
    if (nameEl == "") {
      document.querySelector("#name + .errorMsg").innerHTML = "Please enter your name";
      document.getElementById("name").classList.add("is-invalid");
    //   return false;
    } else {
    //   document.querySelector(".errorMsg").innerHTML = "";
      document.getElementById("name").classList.remove("is-invalid");
    }

    // Validate email
    if (!emailValid.test(emailEl)) {
      document.querySelector("#email + .errorMsg").innerHTML = "Please enter your email";
      document.getElementById("email").classList.add("is-invalid");
    //   return false;
    } else {
    //   document.querySelector(".errorMsg").innerHTML = "";
      document.getElementById("email").classList.remove("is-invalid");
    }

    // Validate phone
    if (!pattern.test(phoneEl)) {
      document.querySelector("#phone + .errorMsg").innerHTML = "Please enter valid phone number";
      document.getElementById("phone").classList.add("is-invalid");
    //   return false;
    } else {
    //   document.querySelector(".errorMsg").innerHTML = "";
      document.getElementById("phone").classList.remove("is-invalid");
    }

    // Validate message
    if (msg == "") {
      document.querySelector("#message + .errorMsg").innerHTML = "Please enter a message";
      document.getElementById("message").classList.add("is-invalid");
    //   return false;
    } else {
    //   document.querySelector(".errorMsg").innerHTML = "";
      document.getElementById("message").classList.remove("is-invalid");
    }
  
    // form[0].reset();
})




