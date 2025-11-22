
        const secretNumber = Math.floor(Math.random() * 100) + 1;
        const guessHistory = [];

        function checkGuess() {

            let guess = Number(document.getElementById("guessInput").value);

            if (!guess) {
                document.getElementById("result").innerText = "Please enter a number.";
                return;
            }

            guessHistory.push(guess);

            if (guess > secretNumber) {
                document.getElementById("result").innerText = "Too high! Try again.";
            } 
            else if (guess < secretNumber) {
                document.getElementById("result").innerText = "Too low! Try again.";
            } 
            else {
                document.getElementById("result").innerText = 
                    "🎉 Correct! The secret number was " + secretNumber;
            }

            let historyText = "Your guesses: ";
            for (let i = 0; i < guessHistory.length; i++) {
                historyText += guessHistory[i] + " ";
            }

            document.getElementById("history").innerText = historyText;
        }