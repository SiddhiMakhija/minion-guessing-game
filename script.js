let randomNumber = Math.floor(Math.random() * 10);
    const message = document.getElementById("message");
    const restartBtn = document.getElementById("restartBtn");
    const submitBtn = document.getElementById("submitBtn");

    function checkGuess() {
      const userGuess = Number(document.getElementById("userGuess").value);

      if (isNaN(userGuess) || userGuess < 0 || userGuess > 9) {
        message.textContent = "🚨 Minions say: Only numbers 0–9!";
        return;
      }

      if (userGuess === randomNumber) {
        message.innerHTML = "🎉 Bananaaa!! You guessed it! 🍌";
        submitBtn.disabled = true;
        restartBtn.style.display = "inline-block";
        launchConfetti();
      } else {
        message.textContent = "😬 Nope! Try again, Minion!";
      }
    }

    function restartGame() {
      randomNumber = Math.floor(Math.random() * 10);
      document.getElementById("userGuess").value = "";
      message.textContent = "";
      restartBtn.style.display = "none";
      submitBtn.disabled = false;
    }

    function launchConfetti() {
      const confettiSettings = { target: 'confetti-canvas', max: 100, size: 1.2 };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();

      setTimeout(() => confetti.clear(), 3000);
    }
