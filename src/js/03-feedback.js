import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';


function saveFormState() {
  const email = document.querySelector('[name="email"]').value;
  const message = document.querySelector('[name="message"]').value;
  const data = { email, message };
  localStorage.setItem(KEY, JSON.stringify(data));
}

function loadFormState() {
  const data = localStorage.getItem(KEY);
  if (data) {
    const { email, message } = JSON.parse(data);
    document.querySelector('[name="email"]').value = email;
    document.querySelector('[name="message"]').value = message;
  }
}

function submitForm() {
  const data = JSON.parse(localStorage.getItem(KEY));
  console.log('Form submitted:', data);
  localStorage.removeItem(KEY);
  form.reset();
}

form.addEventListener('input', throttle(saveFormState, 500));
form.addEventListener('submit', submitForm);

loadFormState();