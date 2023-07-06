document.addEventListener('DOMContentLoaded', function() {
    var signUpBtn = document.querySelector('.btn-1');
    signUpBtn.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Sign up button clicked');
    });
    var playDemoBtn = document.querySelector('.btn.empt.enrol-icon');
    playDemoBtn.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Play Demo button clicked');
    });
  });
  