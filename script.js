// Right now, no complex functionality needed.
// You can add interactive features here later.
// Example: alert when clicking on a project
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', e => {
    e.preventDefault();
    alert(`You clicked on ${card.textContent}`);
  });
});
