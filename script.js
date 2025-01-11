// document.getElementById('notifyForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting

//     var emailInput = document.getElementById('email');
//     var errorMessage = document.getElementById('errorState');
//     var emailValue = emailInput.value;

//     // Simple email validation regex pattern
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailPattern.test(emailValue)) {
//         // If the email is invalid, show the error message and change the border color to red
//         errorMessage.textContent = 'Please provide a valid email address';
//         errorMessage.style.display = 'block';
//         emailInput.classList.add('error');
//     } else {
//         // If the email is valid, remove the error message and reset the border color
//         errorMessage.textContent = '';
//         errorMessage.style.display = 'none';
//         emailInput.classList.remove('error');
//         // You can add code here to handle the valid email submission
//         alert('Thank you! You will be notified.');
//     }
// });







document.getElementById('notifyForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const emailField = document.getElementById('email');
    const errorMessage = document.getElementById('errorMessage');
    const emailValue = emailField.value.trim();
  
    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(emailValue)) {
      emailField.classList.add('error'); // Add error class for red border
      errorMessage.style.display = 'block'; // Show error message
    } else {
      emailField.classList.remove('error'); // Remove error class
      errorMessage.style.display = 'none'; // Hide error message
  
      // Handle successful submission (e.g., send data to server or display success message)
      alert('Thank you! You will be notified soon.');
      emailField.value = ''; // Clear the input field
    }
  });
  