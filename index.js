 // Set target date (6th September 2025)
  const targetDate = new Date("Sep 6, 2025 00:00:00").getTime();

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If expired
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "<h3>✨ Eid Milad-un-Nabi ﷺ Mubarak! ✨</h3>";
    }
  }, 1000);

