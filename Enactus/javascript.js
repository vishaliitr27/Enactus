function toggleDetails(projectId) {
    var details = document.getElementById('details-' + projectId);
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}



function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var isValid = true;

   
    if (name.trim() === '') {
        document.getElementById('nameError').innerHTML = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('nameError').innerHTML = '';
    }

   
    if (email.trim() === '') {
        document.getElementById('emailError').innerHTML = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').innerHTML = 'Invalid email format';
        isValid = false;
    } else {
        document.getElementById('emailError').innerHTML = '';
    }

    if (message.trim() === '') {
        document.getElementById('messageError').innerHTML = 'Message is required';
        isValid = false;
    } else {
        document.getElementById('messageError').innerHTML = '';
    }

    return isValid;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".enactus-circle");
  
    function animateCircles() {
      circles.forEach(function (circle, index) {
        setTimeout(() => {
          circle.classList.add("en-animate");
        }, index * 500);
      });
    }
  
    animateCircles();
  });
  