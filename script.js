const form = document.getElementById('mood-form');
const moodHistory = document.getElementById('mood-history');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const mood = document.getElementById('mood').value;
  const note = document.getElementById('note').value;
  const date = new Date().toLocaleDateString();

  if (!mood) {
    alert('Please select your mood!');
    return;
  }

  const entry = {
    mood,
    note,
    date
  };

  saveMood(entry);
  displayMood(entry);
  form.reset();
});

function saveMood(entry) {
  let entries = JSON.parse(localStorage.getItem('moodEntries')) || [];
  entries.push(entry);
  localStorage.setItem('moodEntries', JSON.stringify(entries));
}

function displayMood(entry) {
  const li = document.createElement('li');
  li.textContent = `${entry.date}: ${entry.mood} - ${entry.note}`;
  moodHistory.prepend(li);
}

function loadMoods() {
  const entries = JSON.parse(localStorage.getItem('moodEntries')) || [];
  entries.forEach(displayMood);
}

loadMoods();
