function guessingGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  function guessNumber() {
      const userGuess = prompt("Угадай число от 1 до 100:");

      if (userGuess === null) {
          return alert("Игра окончена.");
      }

      const guess = parseInt(userGuess);

      if (isNaN(guess)) {
          alert("Введи число!");
          return guessNumber();
      }

      const message = guess < secretNumber ? "Загаданное число больше." :
                      guess > secretNumber ? "Загаданное число меньше." :
                      "Поздравляю, Вы угадали!!!";

      alert(message);
      if (message !== "Поздравляю, Вы угадали!!!") {
          guessNumber();
      }
  }

  guessNumber();
}

guessingGame();
