import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';


function saveFormState() {
  const emailEl = document.querySelector('[name="email"]').value;
  const messageEl = document.querySelector('[name="message"]').value;
  const data = { emailEl, messageEl };
  localStorage.setItem(KEY, JSON.stringify(data));
}

function loadFormState() {
  const data = localStorage.getItem(KEY);
  if (data) {
    const { emailEl, messageEl } = JSON.parse(data);
    document.querySelector('[name="email"]').value = emailEl;
    document.querySelector('[name="message"]').value = messageEl;
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