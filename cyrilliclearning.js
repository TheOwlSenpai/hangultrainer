// Add an event listener for the theme toggle button
document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    body.classList.toggle('light');

    const isLightTheme = body.classList.contains('light');
    themeToggleBtn.innerHTML = isLightTheme ? '<i class="moon-icon" color="#333">Dark</i>' : '<i class="sun-icon">Light</i>';
}

function generateCyrillicWord() {
    let length = document.getElementById("length_slider").value;
    let selectElement = document.getElementById('languageSelect');
    let selectedLanguage = selectElement.value;

    // AJAX request to PHP script to generate Cyrillic word
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "generate_cyrillicword.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.responseText);
                document.getElementById("cyrillicWord").innerText = "Cyrillic Word: " + response.cyrillicWord;
                document.getElementById("wordDisplay").style.display = "block";
                // Store the correct romanized word in a data attribute
                document.getElementById("wordDisplay").setAttribute("data-correct-romanized", response.romanizedWord);
            } else {
                console.error('Error:', xhr.statusText);
            }
        }
    };
    xhr.send("length=" + length + "&language=" + selectedLanguage);
}

function checkCyrillicWord() {
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