// VERSION 1.2

function generateWord() {
    var length = document.getElementById("length_slider").value;
    var difficulty = document.querySelector('input[name="difficulty"]:checked').value;

    // Display difficulty and length
    document.getElementById("radio_d").innerText = "Difficulty: " + difficulty + " | Length: " + length;

    // + "&difficulty=" + difficulty;
    // Make a request to the servlet with the selected length and difficulty
    var servletUrl = "HangulServlet?length_slider=" + length + "&difficulty=" + difficulty; 


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
