// Function to handle search
function handleSearch() {
    const searchBox = document.getElementById('search-box').value;
  
    if (searchBox) {
      alert(`Searching for "${searchBox}".`);
    } else {
      alert('Please enter a valid search term.');
    }
  }
  function showLoginForm() {
    document.querySelector('.login-section').style.display = 'block';
    document.querySelector('.signup-section').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.about').style.display = 'none';
    document.querySelector('.services').style.display = 'none';
  }
  
  // Function to display the Sign Up form and hide the Login form
  function showSignUpForm() {
    document.querySelector('.signup-section').style.display = 'block';
    document.querySelector('.login-section').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.about').style.display = 'none';
    document.querySelector('.services').style.display = 'none';
  }
  