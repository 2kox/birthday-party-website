// Form Open and Close Logic
const openFormButton = document.getElementById('openFormButton');
const closeFormButton = document.getElementById('closeFormButton');
const messageForm = document.getElementById('messageForm');

openFormButton.addEventListener('click', () => {
  messageForm.classList.remove('hidden');
});

closeFormButton.addEventListener('click', () => {
  messageForm.classList.add('hidden');
});

// Form Submission (placeholder for now)
document.getElementById('messageFormElement').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  // Placeholder for backend submission
  alert(`Thank you, ${name}! Your message has been submitted: "${message}"`);
  
  // Clear and close the form
  document.getElementById('messageFormElement').reset();
  messageForm.classList.add('hidden');
});
