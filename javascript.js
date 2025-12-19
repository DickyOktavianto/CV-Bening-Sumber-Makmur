const dateElement = document.getElementById('currentDate');

const now = new Date();

const options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const formattedDate = now.toLocaleDateString('id-ID', options);

dateElement.textContent = formattedDate;
