document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registration-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission if validation fails
    
    // Validation for email
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      emailInput.focus();
      return;
    }

    // Validation for password
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value.trim();
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      passwordInput.focus();
      return;
    }

    // Validation for date of birth
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    if (!isValidDate(day, month, year)) {
      alert('Please enter a valid date of birth');
      return;
    }

    // Validation for account type
    const accountTypeInputs = document.getElementsByName('account-type');
    let accountTypeSelected = false;
    for (let i = 0; i < accountTypeInputs.length; i++) {
      if (accountTypeInputs[i].checked) {
        accountTypeSelected = true;
        break;
      }
    }
    if (!accountTypeSelected) {
      alert('Please select an account type');
      return;
    }

    // If all validations pass, you can submit the form
    alert('Form submitted successfully!');
    form.reset(); // Optional: Reset form fields after successful submission
  });

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return !isNaN(date.getTime());
  }
});