const form = document.getElementById('form');
const uname = document.getElementById('username');
const email = document.getElementById('email');
const pwd = document.getElementById('password');
const confirm_pwd = document.getElementById('confirm-pwd');
const button = document.getElementById('signup');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const not_real = document.getElementById('not-real');
const terms = document.getElementById('terms');
const privacy = document.getElementById('privacy');

const unameRegEx = /[a-zA-Z0-9!@#$%&*-_?]{4,16}/;
const emailRegex = /[a-zA-Z-9!@#$%^&*()-_=+`~]+@[a-zA-Z0-9]+.[a-z]{1,3}/;
const pwdRegEx = /[a-zA-Z0-9!@#$%&*-_?]{6,32}/;

uname.addEventListener('input', () => {
  const isValid = unameRegEx.test(uname.value);

  if(uname.value.length === 0) {
      uname.className = 'text-input';
  } else {
    uname.className = isValid ? 'valid' : 'invalid';
  }
});

email.addEventListener('input', () => {
  const isValid = emailRegex.test(email.value);

  if(email.value.length === 0) {
      email.className = 'text-input';
  } else {
    email.className = isValid ? 'valid' : 'invalid';
  }
});

pwd.addEventListener('input', () => {
  const isValid = pwdRegEx.test(pwd.value);

  if(pwd.value.length === 0) {
    pwd.className = 'text-input';
  } else {
    pwd.className = isValid ? 'valid' : 'invalid';
  }
});

confirm_pwd.addEventListener('input', () => {
  if(confirm_pwd.value !== pwd.value) {
    confirm_pwd.className = 'invalid';
  } else if(confirm_pwd.length === 0) {
    confirm_pwd.className = 'text-input'
  } else {
    confirm_pwd.className = 'valid';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});