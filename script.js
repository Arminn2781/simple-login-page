document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.login-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      
      const username = form.querySelector('input[type="text"]').value;
      const password = form.querySelector('input[type="password"]').value;
  
      
      if (username === 'Armin' && password === '2781') {
        alert('Login successful!');
      } else {
        alert('Invalid username or password. Please try again.\n Hint:(Username : Armin|Password : 2781)');
      }
    });
  });