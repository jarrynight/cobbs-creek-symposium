(() => {
  const countdown = document.getElementById("days-count");
  if (!countdown) return;

  // The symposium opens at midnight on March 4, 2027, in the visitor's local time.
  const symposiumDate = new Date(2027, 2, 4, 0, 0, 0, 0);

  function updateCountdown() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const daysLeft = Math.ceil((symposiumDate - today) / 86_400_000);
    if (daysLeft > 0) {
      countdown.textContent = String(daysLeft);
      countdown.setAttribute("aria-label", `${daysLeft} days until the symposium`);
    } else if (daysLeft === 0) {
      countdown.textContent = "Today!";
      countdown.setAttribute("aria-label", "The symposium is today");
    } else {
      countdown.textContent = "It's here!";
      countdown.setAttribute("aria-label", "The symposium date has passed");
    }
  }

  updateCountdown();
  window.setInterval(updateCountdown, 60_000);
})();
