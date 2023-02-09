// Select the search icon element
const searchIcon = document.querySelector('.searchIcon');

// Select the search input element
const searchInput = document.querySelector('.searchInput');

// Add a click event listener to the search icon element
searchIcon.addEventListener('click', function() {
  // Toggle the 'active' class on the search input element
  searchInput.classList.toggle('active');
});



// Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

// Loop through all dropdown elements
dropdowns.forEach(dropdown => {
  // Get inner elements from each dropdown
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const mainTitle = dropdown.querySelector('.main-title');

  // Check if the dropdown is inside the navRight class
  if (!dropdown.parentElement.classList.contains('navRight')) {
    // Add a click event to the select element
    select.addEventListener('click', () => {
      // Add the clicked select styles to the select element
      select.classList.toggle('select-clicked');
      // Add the rotate styles to the caret element
      caret.classList.toggle('caret-rotate');
      // Add the open styles to the menu element
      menu.classList.toggle('menu-open');
    });
  }
  
  // Add a click event to the menu element
  menu.addEventListener('click', () => {
    // Add the clicked select styles to the select element
    select.classList.toggle('select-clicked');
    // Add the rotate styles to the caret element
    caret.classList.toggle('caret-rotate');
    // Add the open styles to the menu element
    menu.classList.toggle('menu-open');
  });
  
  // Check if the dropdown is inside the navRight class
  if (dropdown.parentElement.classList.contains('navRight')) {
    // Add a mouseenter event to the main-title element
    mainTitle.addEventListener('mouseenter', () => {
      // Add the open styles to the menu element
      menu.classList.add('menu-open');
    });

    // Add a mouseleave event to the main-title element
    mainTitle.addEventListener('mouseleave', () => {
      setTimeout(() => {
        menu.classList.remove('menu-open');
      }, 1500);
    });
  }

  // Loop through all option elements
  options.forEach(option => {
    // Add a click event to the option element
    option.addEventListener('click', () => {
      mainTitle.innerText = `Shop the ${option.innerText} brand`;
      // Remove the clicked select styles from the select element
      select.classList.remove('select-clicked');
      // Remove the rotate styles from the caret element
      caret.classList.remove('caret-rotate');
      // Remove the open styles from the menu element
      menu.classList.remove('menu-open');
      // Remove active class from all option elements
      options.forEach(option => {
        option.classList.remove('active');
      });
      // Add active class to clicked option element
      option.classList.add('active');
    });
  });
});
