// Add this at the beginning of your JavaScript file
window.onload = function() {
    fetch('check_session.php')
    .then(response => response.json())
    .then(data => {
        if (!data.logged_in) {
            window.location.href = 'login.php'; // Redirect to login page if not logged in
        }
    })
    .catch(error => console.error('Error:', error));
}

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
    var length = document.getElementById("length_slider").value;
    var difficulty = document.querySelector('input[name="difficulty"]:checked').value;

    // Display difficulty and length
    document.getElementById("radio_d").innerText = "Difficulty: " + difficulty + " | Length: " + length;

    // Make a request to the servlet with the selected length and difficulty
    var servletUrl = "http:/localhost:8888/generate_word?length_word=" + length + "&difficulty=" + difficulty; 

    // Example using fetch API
    fetch(servletUrl)
        .then(response => response.json())
        .then(data => {
            // Display the Hangul word
            document.getElementById("hangulWord").innerText = "Hangul Word: " + data.koreanWord;
            document.getElementById("wordDisplay").style.display = "block";

            // Store the correct romanized word in a data attribute
            document.getElementById("wordDisplay").setAttribute("data-correct-romanized", data.romanizedWord);
        })
        .catch(error => console.error('Error:', error));
}

function checkWord() {
    var userInput = document.getElementById("romanizedInput").value;
    var correctRomanizedWord = document.getElementById("wordDisplay").getAttribute("data-correct-romanized");

    // Compare user input with the correct Romanized word
    // For simplicity, you can do a case-insensitive comparison
    if (userInput.toLowerCase() === correctRomanizedWord.toLowerCase()) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again.");
    }
}