// Notify.js example integration
document.getElementById('notify-btn').addEventListener('click', () => {
  const notification = new Notify({
    status: 'success', // success, warning, error, info
    title: 'Hello!',
    text: 'Welcome to the Birthday Party Website!',
    effect: 'slide',
  });
  notification.show();
});
