"use strict";
function validateName() {

    let name = document.getElementById('firstname').value;
  
    if(name.length == 0) {
  
      producePrompt('First name is required', 'firstname-error' , 'red')
      return false;
  
    }
  
    if (!name.match(/^[A-Za-z]+$/)) {
  
      producePrompt('Your first name, please.','firstname-error', 'red');
      return false;
  
    }
  
    producePrompt('Valid', 'firstname-error', 'green');
    return true;
  
  }
  
  function validatelName() {
  
    let lName = document.getElementById('lastname').value;
  
    if(lName.length == 0) {
  
      producePrompt('Last name is required', 'lastname-error' , 'red')
      return false;
  
    }
  
    if (!lName.match(/^[A-Za-z]+$/)) {
  
      producePrompt('Your last name, please.','lastname-error', 'red');
      return false;
  
    }
  
    producePrompt('Valid', 'lastname-error', 'green');
    return true;
  
  }
  
  
  
  function validatePhone() {
  
    var phone = document.getElementById('contact-phone').value;
  
      if(phone.length == 0) {
        producePrompt('Phone number is required.', 'phone-error', 'red');
        return false;
      }
  
      if(phone.length != 10) {
        producePrompt('Your phone is wrong.', 'phone-error', 'red');
        return false;
      }
  
      if(!phone.match(/^[0-9]{10}$/)) {
        producePrompt('Only digits, please.' ,'phone-error', 'red');
        return false;
      }
  
      producePrompt('Valid', 'phone-error', 'green');
      return true;
  
  }
  
  function validateEmail () {
  
    var email = document.getElementById('contact-email').value;
  
    if(email.length == 0) {
  
      producePrompt('Email Invalid','email-error', 'red');
      return false;
  
    }
  
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  
      producePrompt('Email Invalid', 'email-error', 'red');
      return false;
  
    }
  
    producePrompt('Valid', 'email-error', 'green');
    return true;
  
  }
  
  function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 10;
    var left = required - message.length;
  
    if (left > 0) {
      producePrompt(left + ' more characters required','message-error','red');
      return false;
    }
  
    producePrompt('Valid', 'message-error', 'green');
    return true;
  
  }
  
  function validateForm() {
    if (!validateName() || !validatelName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        jsShow('submit-error');
        producePrompt('Please fix errors to submit.', 'submit-error', 'red');
        setTimeout(function(){jsHide('submit-error');}, 2000);
        return false;
    }
    else{
      jsShow('submit-correct');
        producePrompt('Your message has been sent.', 'submit-correct', 'green');
        setTimeout(function(){jsHide('submit-correct');}, 2000);
        return true;
    }
  }
  
  function jsShow(id) {
    document.getElementById(id).style.display = 'block';
  }
  
  function jsHide(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  
  
  
  function producePrompt(message, promptLocation, color) {
  
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
  
  
  }