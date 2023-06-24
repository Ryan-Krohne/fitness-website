// JavaScript code for form validation and submission
window.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.querySelector('form');
  
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from being submitted
  
      // Get the form fields
      var heightField = document.getElementById('height');
      var weightField = document.getElementById('weight');
      var genderField = document.getElementById('gender');
      var goalsField = document.getElementById('fitness-goals');
  
      // Get the values from the form fields
      var height = heightField.value.trim();
      var weight = weightField.value.trim();
      var gender = genderField.value;
      var goals = goalsField.value.trim();
  

      //update slider?
      function updateHeightValue(element) {
        var heightValueElement = document.getElementById("heightValue");
        heightValueElement.textContent = element.value + " cm";
      }

      // Perform form validation
      if (height === '' || weight === '' || goals === '') {
        alert('Please fill in all required fields.');
        return;
      }
  
      // Create an object to hold the form data
      var formData = {
        height: height,
        weight: weight,
        gender: gender,
        goals: goals
      };
  
      // can submit the form data to the server using AJAX or other methods
      // for now, will just log the form data to the console
      console.log(formData);
  
      // Reset the form
      form.reset();
    });
  });
  