// Add an event listener for the theme toggle button
document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    body.classList.toggle('light');

    const isLightTheme = body.classList.contains('light');
    themeToggleBtn.innerHTML = isLightTheme ? '<i class="moon-icon" color="#333">Dark</i>' : '<i class="sun-icon">Light</i>';
}

function generateGreekWord() {
    let length = document.getElementById("length_slider").value;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "greeklearning.php", true);  // Ensure to specify the correct endpoint URL
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  // Change to URL encoded for form data
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.responseText);
                document.getElementById("greekWord").innerText = "Greek Word: " + response.greekWord;
                document.getElementById("wordDisplay").style.display = "block";
                document.getElementById("wordDisplay").setAttribute("data-correct-romanized", response.romanizedWord);
            } else {
                console.error('Error:', xhr.statusText);
            }
        }
    };
    xhr.send("length=" + length);
}

function checkGreekWord() {  // Corrected function name to match context
    let userInput = document.getElementById("romanizedInput").value;
    let correctRomanizedWord = document.getElementById("wordDisplay").getAttribute("data-correct-romanized");

    if (userInput.toLowerCase() === correctRomanizedWord.toLowerCase()) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again.");
    }
}
