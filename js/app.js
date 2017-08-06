(function () {
  'use strict';

  var contactDisplay = document.getElementById('contact-display');
  var phone = document.getElementById('phone-icon');
  var email = document.getElementById('email-icon');
  var phoneNumber = '864-322-3201';
  var address = 'thedoyles922@gmail.com'
  console.log(contactDisplay);
  console.log(phone);
  console.log(email);

  phone.onclick = function() {
    contactDisplay.innerHTML = phoneNumber;
  }

  email.onclick = function() {
    contactDisplay.innerHTML = address;
  }

})();
