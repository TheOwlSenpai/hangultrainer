// Add an event listener for the theme toggle button
document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    body.classList.toggle('light');

    const isLightTheme = body.classList.contains('light');
    themeToggleBtn.innerHTML = isLightTheme ? '<i class="moon-icon" color="#333">Dark</i>' : '<i class="sun-icon">Light</i>';
}

function generateWord() {
    let length = document.getElementById("length_slider").value;
    let difficulty = document.querySelector('input[name="difficulty"]:checked').value;

    // Send an AJAX request to the PHP script
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `hangullearning.php?difficulty=${difficulty}&length=${length}`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let response = JSON.parse(this.responseText);
            document.getElementById("hangulWord").innerText = "Hangul Word: " + response.word;
            document.getElementById("wordDisplay").style.display = "block";

            // Store the correct romanized word in a data attribute
            document.getElementById("wordDisplay").setAttribute("data-correct-romanized", response.romanized);
        }
    };
    xhr.send();
}

function checkWord() {
    let userInput = document.getElementById("romanizedInput").value;
    let correctRomanizedWord = document.getElementById("wordDisplay").getAttribute("data-correct-romanized");

    // Compare user input with the correct Romanized word
    // For simplicity, you can do a case-insensitive comparison
    if (userInput.toLowerCase() === correctRomanizedWord.toLowerCase()) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again.");
    }
}